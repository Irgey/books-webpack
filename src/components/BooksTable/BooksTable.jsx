// Libs
import PropTypes from 'prop-types';
import { Fragment } from 'react';
// Mui components
import {
  Skeleton,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Paper,
  Link,
} from '@mui/material';
// Local
import { BooksDetails } from 'components/BookDetails/BooksDetails';
import { StyledTableCell, StyledTableRow } from './BooksTable.styled';

export const BooksTable = ({
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
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>
                {isLoading ? <Skeleton variant="text" /> : 'Title'}
              </StyledTableCell>
              <StyledTableCell align="right">
                {isLoading ? <Skeleton variant="text" /> : 'Author'}
              </StyledTableCell>
              <StyledTableCell align="right">
                {isLoading ? <Skeleton variant="text" /> : 'ID'}
              </StyledTableCell>
              <StyledTableCell align="right">
                {isLoading ? <Skeleton variant="text" /> : 'Link'}
              </StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {books.items.map(item => {
              const {
                id,
                volumeInfo: { authors, title, infoLink },
              } = item;
              const servedLink = serveLink(infoLink);
              return (
                <Fragment key={id}>
                  <StyledTableRow
                    onClick={() => {
                      handleRowClick(id);
                    }}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                      ':hover': {},
                    }}
                  >
                    <StyledTableCell component="th" scope="row">
                      {title}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {authors?.join(', ')}
                    </StyledTableCell>
                    <StyledTableCell align="right">{item.id}</StyledTableCell>
                    <StyledTableCell align="right">
                      <Link
                        href={infoLink}
                        rel="noreferrer nofollow"
                        color="inherit"
                        underline="hover"
                        aria-label={`${servedLink} link`}
                      >
                        {servedLink}
                      </Link>
                    </StyledTableCell>
                  </StyledTableRow>
                  {id === detailsParam && detailedData && (
                    <BooksDetails detailedData={detailedData} />
                  )}
                </Fragment>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    )
  );
};

BooksTable.propTypes = {
  detailedData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    volumeInfo: PropTypes.objectOf(PropTypes.string),
  }),
};
