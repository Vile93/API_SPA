import { createBrowserRouter } from 'react-router-dom';
import { IParams } from './interfaces/IParams';
import Homepage from './pages/Homepage';
import Albumspage from './pages/Albumspage';
import MainLayout from './layouts/MainLayout/MainLayout';
import Albumpage from './pages/Albumpage';
import Userpage from './pages/Userpage';
import ErrorLayout from './layouts/MainLayout/ErrorLayout';
import NotFoundpage from './pages/NotFoundpage';

// eslint-disable-next-line react-refresh/only-export-components
const API = 'http://localhost:3000';

const LOADER_DATA = {
    USERS: ({ params }: { params: IParams }) => {
        const data = fetch(`${API}/users/${params?.userId ?? ''}`).then((res) =>
            res.json()
        );
        return { data };
    },
    ALBUMS: () => {
        const data = fetch(`${API}/albums`).then((res) => res.json());
        return { data };
    },
    USER: ({ params }: { params: IParams }) => {
        const albums = fetch(
            `${API}/albums?userId=${params.userId ?? ''}`
        ).then((res) => res.json());
        const user = fetch(`${API}/users/${params.userId ?? ''}`).then((res) =>
            res.json()
        );
        return { user, albums };
    },
    ALBUM: async ({ params }: { params: IParams }) => {
        const photos = fetch(
            `${API}/photos?albumId=${params.albumId ?? ''}`
        ).then((res) => res.json());
        const album = await fetch(`${API}/albums/${params.albumId ?? ''}`).then(
            (res) => res.json()
        );
        const user = fetch(`${API}/users/${album.userId}`).then((res) =>
            res.json()
        );
        return { photos, album, user };
    },
};

export const ROUTES = {
    HOME: '/',
    USERS: '/users',
    ALBUMS: '/albums',
};

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorLayout />,
        children: [
            {
                index: true,
                element: <Homepage />,
                loader: LOADER_DATA.USERS,
            },
            {
                path: 'albums',
                element: <Albumspage />,
                loader: LOADER_DATA.ALBUMS,
            },
            {
                path: 'albums/:albumId',
                element: <Albumpage />,
                loader: LOADER_DATA.ALBUM,
            },
            {
                path: 'users/:userId',
                element: <Userpage />,
                loader: LOADER_DATA.USER,
            },
            {
                path: 'users/:userId/albums/:albumId',
                element: <Albumpage />,
                loader: LOADER_DATA.ALBUM,
            },
            { path: '*', element: <NotFoundpage /> },
        ],
    },
]);
