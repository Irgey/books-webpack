import { useLocation, useNavigate } from 'react-router-dom';

import { Button, Breadcrumbs as MUIBreadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useBooksContext } from 'hooks/booksContext';

export const Breadcrumbs = ({ handleMobileMenuClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setSearchParams, queryParam, detailsParam } = useBooksContext();

  let pathCrumbs = location.pathname
    .split('/')
    .filter(crumb => Boolean(crumb) === true);
  return (
    <MUIBreadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextIcon fontSize="small" sx={{ color: 'white' }} />}
    >
      {pathCrumbs.length === 0 && (
        <Button
          sx={{ color: 'white' }}
          variant="text"
          onClick={() => {
            handleMobileMenuClose();
            navigate('/');
          }}
        >
          Home
        </Button>
      )}
      {pathCrumbs &&
        pathCrumbs.map(crumb => (
          <Button
            key={crumb}
            sx={{ color: 'white' }}
            variant="text"
            onClick={() => {
              handleMobileMenuClose();
              navigate(crumb);
            }}
          >
            {crumb}
          </Button>
        ))}
      {queryParam && (
        <Button
          sx={{ color: 'white' }}
          variant="text"
          onClick={() => {
            handleMobileMenuClose();
            setSearchParams({ q: queryParam });
          }}
        >
          {queryParam}
        </Button>
      )}
      {detailsParam && (
        <Button
          sx={{ color: 'white' }}
          variant="text"
          onClick={() => {
            handleMobileMenuClose();
            setSearchParams({ q: queryParam, details: detailsParam });
          }}
        >
          {detailsParam}
        </Button>
      )}
    </MUIBreadcrumbs>
  );
};
