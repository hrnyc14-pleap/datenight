import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';


const NavBar = ({path, handleLogout}) => (
    <div>
        <AppBar
          zDepth={0}
          style={{"backgroundColor":"rgba(0,0,0,0.4)"}}
          showMenuIconButton={false}
          iconElementRight={
                <div>
                    {console.log('THIS IS THE PATH', path)}
                    {(path === '/signup' || path === '/') && <Link to='/login'><FlatButton label="Login" style={{"color":"#fff", "zIndex":"2"}}/></Link>}
                    {(path === '/login') && <Link to='/signup'><FlatButton label="Sign Up" style={{"color":"#fff"}}/></Link>}
                    {(path !== '/login' && path !== '/signup' && path !== '/') && <Link to='/questions'><FlatButton label="Questions" style={{"color":"#fff"}}/></Link>}
                    {(path !== '/login' && path !== '/signup' && path !== '/' ) && <Link to='/favorites'><FlatButton label="Favorites" style={{"color":"#fff"}}/></Link>}
                    {(path !== '/login' && path !== '/signup' && path !== '/' ) && <FlatButton onClick={handleLogout} label="Log Out" style={{"color":"#fff"}}/>}

                </div>
        
            }
        />
       
    </div>
)

export default NavBar;
