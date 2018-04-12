import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';


const NavBar = ({path, handleLogout}) => (
    <div>
        <AppBar
          title="Date Night Generator"
          iconElementRight={
                <div>
                    {console.log('THIS IS THE PATH', path)}
                    {(path === '/signup' || path === '/') && <Link to='/login'><FlatButton label="Login" style={{"color":"white"}}/></Link>}
                    {(path === '/login') && <Link to='/signup'><FlatButton label="Sign Up" style={{"color":"white"}}/></Link>}
                    {(path !== '/login' && path !== '/signup' && path !== '/') && <Link to='/questions'><FlatButton label="Questions" style={{"color":"white"}}/></Link>}
                    {(path !== '/login' && path !== '/signup' && path !== '/' ) && <Link to='/favorites'><FlatButton label="Favorites" style={{"color":"white"}}/></Link>}
                    {(path !== '/login' && path !== '/signup' && path !== '/' ) && <FlatButton onClick={handleLogout} label="Log Out" style={{"color":"white"}}/>}

                </div>
        
            }
        />
       
    </div>
)

export default NavBar;
