import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Typography } from '@mui/material';

export const ErrorAPIRepresentation = ({ error }) => {
  useEffect(() => {
    toast(`${error.response.status}: ${error.response.data.error.message}`);
  }, [error]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {error?.response.status === 400 && (
        <>
          <Typography variant="h3" align="center" gutterBottom>
            Ooops, something went wrong 😥.
          </Typography>
          <Typography variant="h4" align="center" gutterBottom>
            Our administrators will fix the issue 👩‍🔧
          </Typography>
          <Typography align="center">Please, try later</Typography>
        </>
      )}
      {error?.response.status === 500 && (
        <>
          <Typography variant="h3" align="center" gutterBottom>
            Ooops, something went wrong 😥.
          </Typography>
          <Typography variant="h4" align="center" gutterBottom>
            Google Books API not responding
          </Typography>
          <Typography align="center">Please, try later</Typography>
        </>
      )}
      {error?.response.status === 429 && (
        <>
          <Typography variant="h3" align="center" gutterBottom>
            Ooops, something went wrong 😥.
          </Typography>
          <Typography variant="h4" align="center" gutterBottom>
            Our service reached daily limit of searches due to limitation og
            Google Books Api
          </Typography>
          <Typography align="center">
            Please, come back tomorrow after 9:00AM.
          </Typography>
        </>
      )}
      {error?.response.status !== 429 &&
        error?.response.status !== 400 &&
        error?.response.status !== 500 && (
          <>
            <Typography variant="h3" align="center" gutterBottom>
              Ooops, something went wrong 😥.
            </Typography>
            <Typography variant="h4" align="center" gutterBottom>
              Please, try again later
            </Typography>
          </>
        )}
    </>
  );
};

ErrorAPIRepresentation.propTypes = {
  error: PropTypes.object.isRequired,
};
