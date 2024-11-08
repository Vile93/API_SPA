import { Await, Link, useLoaderData, useParams } from 'react-router-dom';
import { IUser } from '../interfaces/IUser';
import { Suspense } from 'react';
import Loader from '../components/Loader';
import { isEmptyObject } from '../utils/isEmptyObject';
import { IAlbum } from '../interfaces/IAlbum';

const Userpage = () => {
    const { user, albums } = useLoaderData() as {
        user: Promise<IUser>;
        albums: Promise<IAlbum[]>;
    };

    const params = useParams();

    return (
        <Suspense fallback={<Loader />}>
            <Await
                resolve={user}
                children={(user: IUser) =>
                    user && !isEmptyObject(user) ? (
                        <div className="mb-8">
                            <div key={user.id} className="my-1">
                                <div className="text-primary font-semibold">
                                    {user.name}
                                </div>
                                <div className="text-secondary">
                                    Username: {user.username}
                                </div>
                                <div className="text-secondary">
                                    Email:{' '}
                                    <a href={`mailto:${user.email}`}>
                                        {user.email}
                                    </a>
                                </div>
                                <div className="text-secondary">
                                    Phone: {user.phone}
                                </div>
                                <div className="text-secondary">
                                    Site:{' '}
                                    <a href={user.website}>{user.website}</a>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>Could not load or found user</div>
                    )
                }
            />

            <Await
                resolve={albums}
                children={(albums: IAlbum[]) =>
                    albums.length ? (
                        <div>
                            <div className="font-bold mb-1">Albums</div>
                            {albums.map((album) => (
                                <div key={album.id}>
                                    <Link
                                        to={`/users/${params.userId}/albums/${album.id}`}
                                        key={album.id}
                                    >
                                        {album.title}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>Could not load or found albums</div>
                    )
                }
            />
        </Suspense>
    );
};

export default Userpage;
