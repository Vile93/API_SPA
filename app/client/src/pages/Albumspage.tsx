import { Suspense } from 'react';
import { Await, Link, useLoaderData } from 'react-router-dom';
import Loader from '../components/Loader';
import { IAlbum } from '../interfaces/IAlbum';

const Albumspage = () => {
    const data = useLoaderData() as { data: Promise<IAlbum[]> };

    return (
        <Suspense fallback={<Loader />}>
            <Await
                resolve={data.data}
                children={(albums: IAlbum[]) => (
                    <div>
                        {albums.map((album) => (
                            <div key={album.id}>
                                <Link to={'/albums' + `/${album.id}`}>
                                    {album.title}
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            />
        </Suspense>
    );
};

export default Albumspage;
