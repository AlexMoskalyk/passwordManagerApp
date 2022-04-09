import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../../firebaseAuth/FirebaseAuth';
import { useAuth } from '../../hook/useAuth';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import './Navbar.css';

const Navbar = () => {
  const user = useAuth().user;
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      alert(error);
    }

    navigate('/');
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'center' }}>
        {user ? (
          <>
            <NavLink to="dashboard" className="Navlink">
              <Typography>Dashboard</Typography>
            </NavLink>
            <Typography sx={{ mr: 5, ml: 5 }}>{user.email}</Typography>
            <Button
              variant="outlined"
              color="inherit"
              sx={{ width: 150, ml: 5 }}
              onClick={handleLogout}
            >
              Log out
            </Button>
          </>
        ) : (
          <>
            <NavLink to="/" className="Navlink">
              <Typography sx={{ mr: 5 }}>Sign Up</Typography>
            </NavLink>
            <NavLink to="login" className="Navlink">
              <Typography>Login</Typography>
            </NavLink>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
