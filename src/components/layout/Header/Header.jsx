import { useLocation, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu,
  Slide,
  useScrollTrigger,
} from '@mui/material';
import { useState } from 'react';
import { useBooksContext } from 'hooks/booksContext';
import { Search, StyledInputBase } from './Header.styled';
import { Breadcrumbs } from 'components/Breadcrumbs/Breadcrumbs';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide
      appear={false}
      direction="down"
      in={!trigger}
      id="back-to-top-anchor"
    >
      {children}
    </Slide>
  );
}

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [query, setQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const { setSearchParams, queryParam } = useBooksContext();
  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const searchBooks = e => {
    e.preventDefault();
    if (!location.pathname.includes('books')) {
      console.log("I'M inside if statement");
      navigate('books');
    }
    setSearchParams({ q: query.trim().toLowerCase() });
  };
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={() => {
          navigate('/');
          handleMenuClose();
        }}
      >
        Home
      </MenuItem>
      <MenuItem
        onClick={() => {
          if (queryParam) {
            handleMenuClose();
            return;
          }
          navigate('/books');
          handleMenuClose();
        }}
      >
        Books
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      sx={{ mt: '1px', '& .MuiMenu-paper': { backgroundColor: '#1c7cdc' } }}
    >
      <Breadcrumbs handleMobileMenuClose={handleMobileMenuClose} />
    </Menu>
  );

  return (
    <HideOnScroll>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={handleProfileMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              Books Info
            </Typography>

            <Search
              onSubmit={e => {
                searchBooks(e);
              }}
            >
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                value={query}
                onChange={e => {
                  setQuery(e.target.value);
                }}
              />
              <IconButton
                aria-label="delete"
                sx={{ color: 'white' }}
                disabled={query ? false : true}
                type="submit"
                size="large"
                onClick={() => {
                  if (!location.pathname.includes('books')) {
                    navigate('books');
                  }
                }}
              >
                <SearchIcon />
              </IconButton>
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Breadcrumbs handleMobileMenuClose={handleMobileMenuClose} />
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </HideOnScroll>
  );
};
