import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';


const NavBar = ({path, handleLogout, isLoggedIn}) => (
    <div>
        <AppBar
          zDepth={0}
          style={{"backgroundColor":"rgba(0,0,0,0.4)"}}
          showMenuIconButton={false}
          iconElementRight={
                <div>
                    {(path !== '/login' && !isLoggedIn) && <Link to='/login'><FlatButton label="Login" style={{"color":"white"}}/></Link>}
                    {(path !== '/signup' && !isLoggedIn) && <Link to='/signup'><FlatButton label="Sign Up" style={{"color":"white"}}/></Link>}
                    {(path !== '/questions') && <Link to='/questions'><FlatButton label="Questions" style={{"color":"white"}}/></Link>}
                    {((path !== '/favorites') && (isLoggedIn)) && <Link to='/favorites'><FlatButton label="Favorites" style={{"color":"white"}}/></Link>}
                    {(isLoggedIn) && <FlatButton onClick={handleLogout} label="Log Out" style={{"color":"white"}}/>}

                </div>
        
            }
        />
       
    </div>
)

export default NavBar;
