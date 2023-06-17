import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import { Button, Breadcrumbs as MUIBreadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Breadcrumbs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('q');
  const currentDetails = searchParams.get('details');

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
            navigate('/');
          }}
        >
          Home
        </Button>
      )}
      {pathCrumbs &&
        pathCrumbs.map(crumb => (
          <Button
            sx={{ color: 'white' }}
            variant="text"
            onClick={() => {
              navigate(crumb);
            }}
          >
            {crumb}
          </Button>
        ))}
      {searchQuery && (
        <Button
          sx={{ color: 'white' }}
          variant="text"
          onClick={() => {
            setSearchParams({ q: searchQuery });
          }}
        >
          {searchQuery}
        </Button>
      )}
      {currentDetails && (
        <Button
          sx={{ color: 'white' }}
          variant="text"
          onClick={() => {
            setSearchParams({ q: searchQuery, details: currentDetails });
          }}
        >
          {currentDetails}
        </Button>
      )}
    </MUIBreadcrumbs>
  );
};

export default Breadcrumbs;
