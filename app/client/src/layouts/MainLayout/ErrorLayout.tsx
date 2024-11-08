import Error from '../../components/Error';
import Header from './components/Header';

const ErrorLayout = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between container mx-auto px-4 pt-4">
            <Header />
            <main className="flex-auto pt-2">
                <Error />
            </main>
        </div>
    );
};

export default ErrorLayout;
