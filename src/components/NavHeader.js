import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {Link, useNavigate} from 'react-router-dom';
import { Router } from 'react-router-dom';

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  let navigate = useNavigate();

  const toHome = () =>{ 
    let path = ``; 
    navigate(path);
  }

  const toProjects = () =>{ 
    let path = `projects`; 
    navigate(path);
  }

  const toAbout = () =>{ 
    let path = `about`; 
    navigate(path);
  }

  const styles = {
    customizeToolbar: {
      maxHeight: 36
    }
  };

  return (
    <AppBar position="static" style={{ background: '#2E3B55'}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: {md: 'flex', height: '100%' } }}>
              <Button
                key="home"
                onClick={() => toHome()}
                sx={{color: 'white', display: 'block'}}
              >
              Home
              </Button>
              <Button
                key="projects"
                onClick={() => toProjects()}
                sx={{color: 'white', display: 'block'}}
              >
              Projects
              </Button>
              <Button
                key="about"
                onClick={() => toAbout()}
                sx={{color: 'white', display: 'block'}}
              >
              About
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
<Link className="navText" to="author">Authors</Link>