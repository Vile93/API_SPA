import { FC } from 'react';

interface IErrorProps {
    status?: string;
    title?: string;
    descr?: string;
}

const Error: FC<IErrorProps> = ({ status, title, descr }) => {
    return (
        <section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary">
                        {status ?? '500'}
                    </h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold">
                        {title ?? 'Internal Server Error.'}
                    </p>
                    <p className="mb-4 text-lg font-light text-secondary">
                        {descr ??
                            'We are already working to solve the problem.'}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Error;
