import { Outlet } from 'react-router-dom';
import { Fab, Fade, Box } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { useBooksContext } from 'hooks/booksContext';
import { StyledBookPic, StyledMain } from './Layout.styled';
import { useMediaQuery } from 'react-responsive';

const ScrollTop = props => {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
};

export const Layout = () => {
  const { queryParam } = useBooksContext();
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  return (
    <>
      <Header />
      <StyledMain>
        <Outlet />
        {!queryParam && isTablet && <StyledBookPic />}
      </StyledMain>

      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <Footer />
    </>
  );
};
