import { Suspense } from 'react';
import { Await, Link, useLoaderData } from 'react-router-dom';
import { IPhoto } from '../interfaces/IPhoto';
import { IAlbum } from '../interfaces/IAlbum';
import { isEmptyObject } from '../utils/isEmptyObject';
import Loader from '../components/Loader';
import { IUser } from '../interfaces/IUser';

const Albumpage = () => {
    const { photos, album, user } = useLoaderData() as {
        photos: Promise<IPhoto[]>;
        album: Promise<IAlbum>;
        user: Promise<IUser>;
    };

    return (
        <Suspense fallback={<Loader />}>
            <Await
                resolve={album}
                children={(album: IAlbum) =>
                    album && !isEmptyObject(album) ? (
                        <div>
                            <div className="font-bold mb-1">{album.title}</div>
                        </div>
                    ) : (
                        <div>Album title not found</div>
                    )
                }
            />
            <Await
                resolve={user}
                children={(user: IUser) =>
                    user && !isEmptyObject(user) ? (
                        <div className="text-secondary mb-8">
                            Created by:{' '}
                            <Link to={`/users/${user.id}`}>{user.name}</Link>
                        </div>
                    ) : (
                        <div>Album creator name not found</div>
                    )
                }
            />
            <Await
                resolve={photos}
                children={(photos: IPhoto[]) =>
                    photos.length ? (
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-4">
                            {photos.map((photo) => (
                                <img
                                    key={photo.id}
                                    src={photo.url}
                                    alt={photo.title}
                                    className="rounded-lg"
                                />
                            ))}
                        </div>
                    ) : (
                        <div>There are no photos in the album</div>
                    )
                }
            />
        </Suspense>
    );
};

export default Albumpage;
