import { Suspense } from 'react';
import { Await, Link, useLoaderData } from 'react-router-dom';
import Loader from '../components/Loader';
import { IUser } from '../interfaces/IUser';

const Homepage = () => {
    const data = useLoaderData() as { data: Promise<IUser[]> };

    return (
        <Suspense fallback={<Loader />}>
            <Await
                resolve={data.data}
                children={(users: IUser[]) => (
                    <div>
                        {users.map((user) => (
                            <div key={user.id}>
                                <Link to={'/users' + `/${user.id}`}>
                                    {user.name}
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            />
        </Suspense>
    );
};

export default Homepage;
