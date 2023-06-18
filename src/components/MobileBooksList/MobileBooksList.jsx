import PropTypes from 'prop-types';
import {
  List,
  ListSubheader,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { MobileDetailsCard } from 'components/MobileDetailsCard/MobileDetailsCard';
import { Fragment } from 'react';

export const MobileBooksList = ({
  books,
  detailedData,
  queryParam,
  isLoading,
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
              {id === detailsParam && (
                <MobileDetailsCard detailedData={detailedData} />
              )}
            </Fragment>
          );
        })}
      </List>
    )
  );
};

// MobileBooksList.propTypes = {
//   detailedData: PropTypes.shape({
//     id: PropTypes.string.isRequired(),
//     volumeInfo: PropTypes.objectOf(PropTypes.string),
//   }).isRequired(),
// };
MobileBooksList.propTypes = {
  detailedData: PropTypes.object,
};
