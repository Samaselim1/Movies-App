import React from 'react';
import { Link } from 'react-router-dom'; 
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Movie App
        </Typography>
        <Box>
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button component={Link} to="/about" color="inherit">
            About Us
          </Button>
          <Button component={Link} to="/profile" color="inherit">
            My Profile
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
