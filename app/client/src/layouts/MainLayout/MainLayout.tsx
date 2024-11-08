import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between container mx-auto px-4 pt-4">
            <Header />
            <main className="flex-auto pt-2">
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
