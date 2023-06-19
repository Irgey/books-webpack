import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { StyledImg } from './NotFoundPage.styled';

export const NotFoundPage = () => {
  return (
    <>
      <Typography variant="h3" align="center">
        Whoops!
      </Typography>
      <Typography variant="h5" align="center">
        404 Page Not Found
      </Typography>
      <StyledImg
        alt="Dogs on vacation"
        src="https://coschedule.com/_next/image?url=%2Fimg%2Fvacation.gif&w=640&q=75"
      ></StyledImg>
      <Typography variant="body1" align="center">
        Looks like this page went on vacation.
      </Typography>
      <Typography variant="body1" align="center">
        Try our <Link to="/">homepage</Link> instead.
      </Typography>
    </>
  );
};
