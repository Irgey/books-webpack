import { StyledTableCell } from 'components/BooksTable/BooksTable.styled';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material';
export { StyledTableCell };

export const StyledTableRowDetails = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  '.Mui': {
    transition: 'background-color 300ms ease',
  },
}));

export const StyledImg = styled('img')({
  maxWidth: '20vw',
});
