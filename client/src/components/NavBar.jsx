import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({path, handleLogout, isLoggedIn}) => (
    <div>
        {console.log('ISLOGGEDIN', isLoggedIn)}
        Navigation bar
        {console.log('THIS IS THE PATH', path)}
        {(path !== '/login' && !isLoggedIn) && <Link to='/login'>Login</Link>}
        {(path !== '/signup' && !isLoggedIn) && <Link to='/signup'>Sign up</Link>}
        {(path !== '/questions') && <Link to='/questions'>Questions</Link>}
        {((path !== '/favorites') && (isLoggedIn)) && <Link to='/favorites'>Favorites</Link>}
        {(isLoggedIn) && <button onClick={handleLogout}> logout </button>}
    </div>
)

export default NavBar;
