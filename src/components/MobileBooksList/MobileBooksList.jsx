import PropTypes from 'prop-types';
import { Fragment } from 'react';
import {
  List,
  ListSubheader,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { MobileDetailsCard } from 'components/MobileDetailsCard/MobileDetailsCard';
import { MobileDetailsCardSkeleton } from 'components/Skeletons/MobileDetailsCardSkeleton';

export const MobileBooksList = ({
  books,
  detailedData,
  queryParam,
  isFetchingDetails,
  handleRowClick,
  detailsParam,
  serveLink,
}) => {
  return (
    books && (
      <List
        sx={{ width: '100%', maxWidth: 480, bgcolor: 'background.paper' }}
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader id="nested-list-subheader">
            Title, Author (tap to see more)
          </ListSubheader>
        }
      >
        {books.items.map(item => {
          const {
            id,
            volumeInfo: { authors, title },
          } = item;
          return (
            <Fragment key={id}>
              <ListItemButton
                onClick={() => {
                  handleRowClick(id);
                }}
              >
                <ListItemText primary={title} secondary={authors?.join(', ')} />
                {id === detailsParam ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              {/* Skeleton */}
              {id === detailsParam && isFetchingDetails && (
                <MobileDetailsCardSkeleton />
              )}
              {id === detailsParam && detailedData && (
                <MobileDetailsCard
                  detailedData={detailedData}
                  detailsParam={detailsParam}
                />
              )}
            </Fragment>
          );
        })}
      </List>
    )
  );
};

MobileBooksList.propTypes = {
  detailedData: PropTypes.shape({
    id: PropTypes.string,
    volumeInfo: PropTypes.object,
  }),
};
