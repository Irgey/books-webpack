// Libs
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// Mui components
// Local
import { BooksTable } from 'components/BooksTable/BooksTable';
import { Typography, Container } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export const BooksPage = ({ query }) => {
  return (
    <>
      <ReactQueryDevtools />
      <Container maxWidth="xl">
        {!query && (
          <Typography>
            Type your search query on search field <ArrowUpwardIcon />
          </Typography>
        )}
        <BooksTable />
      </Container>
    </>
  );
};
