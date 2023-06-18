// Libs
import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
// Mui components
import {
  Skeleton,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Paper,
} from '@mui/material';
// Local
import { searchByQuery } from 'services/books-api';
import { BooksDetails } from 'components/BookDetails/BooksDetails';
import { useBooksContext } from 'hooks/booksContext';
import { StyledTableCell, StyledTableRow } from './BooksTable.styled';
import { serveLink } from 'utils/serveLink';

export const BooksTable = () => {
  const { queryParam, setSearchParams, detailsParam } = useBooksContext();
  const [currentId, setCurrentId] = useState('');

  const { data: tableBooks, isLoading } = useQuery({
    queryKey: ['books', queryParam],
    queryFn: () => searchByQuery(queryParam.trim().split(' ').join('+')),
    enabled: Boolean(queryParam),
  });

  const handleRowClick = id => {
    if (currentId === id) {
      setCurrentId('');
      setSearchParams({ q: queryParam });
      return;
    }
    setCurrentId(id);
    setSearchParams({ q: queryParam, details: id });
  };

  return (
    <div>
      {tableBooks && queryParam && (
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
              {tableBooks.items.map(item => {
                const {
                  id,
                  volumeInfo: { authors, title, infoLink },
                } = item;
                return (
                  <React.Fragment key={id}>
                    <StyledTableRow
                      onClick={() => {
                        handleRowClick(id);
                      }}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
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
                        <a href={infoLink} rel="noreferrer">
                          {serveLink(infoLink)}
                        </a>
                      </StyledTableCell>
                    </StyledTableRow>
                    {item.id === detailsParam && <BooksDetails />}
                  </React.Fragment>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};
