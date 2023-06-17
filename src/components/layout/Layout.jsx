import React from 'react';
import { Outlet } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import { Header } from './Header/Header';
import styled from '@emotion/styled';
import { Footer } from './Footer/Footer';
import { ReactComponent as BookPic } from '../../images/book.svg';
function ScrollTop(props) {
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
}

export const Layout = ({ query, setQuery, setSearchParams }) => {
  return (
    <>
      <Header
        query={query}
        setQuery={setQuery}
        setSearchParams={setSearchParams}
      />
      <StyledMain>
        {' '}
        <Outlet />
        <StyledBookPic fill="#1976d2" width={250} height={250} />
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

const StyledMain = styled.main`
  padding: 84px 24px 20px 24px;
  position: relative;
  min-height: calc(100vh - 150px);
`;

const StyledBookPic = styled(BookPic)`
  position: absolute;
  right: 5px;
  bottom: 5px;
`;
