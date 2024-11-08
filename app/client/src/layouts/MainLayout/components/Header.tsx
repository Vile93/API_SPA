import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../constants';

const Header = () => {
    return (
        <header className="flex gap-12 text-xl">
            <NavLink to={ROUTES.ALBUMS}>Albums</NavLink>
            <NavLink to={ROUTES.HOME}>Users</NavLink>
        </header>
    );
};

export default Header;
