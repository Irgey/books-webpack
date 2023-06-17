import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';

import { Button, Breadcrumbs as MUIBreadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Breadcrumbs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  let params = useParams();
  console.log(params);

  const searchQuery = searchParams.get('q');
  const currentDetails = searchParams.get('details');

  let pathCrumbs = location.pathname
    .split('/')
    .filter(crumb => Boolean(crumb) === true);
  console.log(location);
  return (
    <MUIBreadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextIcon fontSize="small" />}
    >
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
