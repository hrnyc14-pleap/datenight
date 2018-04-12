import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({path, handleLogout}) => (
    <div>
        Navigation bar
        {console.log('THIS IS THE PATH', path)}
        {path !== '/signup' && <Link to='/login'>Login</Link>}
        {path !== '/login' && <Link to='/signup'>Sign up</Link>}
        {(path === '/login' || path === '/signup' ) && <Link to='/questions'>Questions</Link>}
        {(path === '/login' || path === '/signup' ) && <Link to='/favorites'>Favorites</Link>}
        {(path === '/login' || path === '/signup' ) && <button onClick={handleLogout}> logout </button>}
    </div>
)

export default NavBar;
