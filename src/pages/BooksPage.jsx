// Libs
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
// Mui components
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton, Skeleton, TextField, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
// Local
import { searchByQuery } from "../services/books-api";
import { BooksDetails } from "../components/BookDetails/BooksDetails";

export const BooksPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");
  const currentDetails = searchParams.get("details");
  const [currentId, setCurrentId] = useState("");
  const [query, setQuery] = useState("");

  const {
    data: tableBooks,
    isLoading,
    refetch: getSearchedBooks,
  } = useQuery({
    queryKey: ["books"],
    queryFn: () => searchByQuery(searchQuery),
    enabled: false,
  });

  useEffect(() => {
    console.dir(searchQuery);
    searchQuery && getSearchedBooks();
  }, [searchQuery, getSearchedBooks]);
  const handleRowClick = (id) => {
    if (currentId === id) {
      setCurrentId("");
      setSearchParams({ q: searchQuery });
      return;
    }
    setCurrentId(id);
    setSearchParams({ q: searchQuery, details: id });
  };

  return (
    <>
      <ReactQueryDevtools />
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSearchParams({ q: query });
          }}
        >
          <TextField
            id="outlined-basic"
            label="Type search query"
            variant="outlined"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <IconButton
            aria-label="delete"
            color="primary"
            disabled={query ? false : true}
            type="submit"
            size="large"
          >
            <SearchIcon />
          </IconButton>
          {/* <input
            value={query}
            type="text"
            placeholder="Type book title that you wanna to search..."
          /> */}
          {/* <button disabled={query ? false : true}>Search</button> */}
        </form>
        {tableBooks && searchQuery && (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell>
                    {isLoading ? <Skeleton variant="text" /> : "Title"}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {isLoading ? <Skeleton variant="text" /> : "Author"}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {isLoading ? <Skeleton variant="text" /> : "ID"}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {isLoading ? <Skeleton variant="text" /> : "Link"}
                  </StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {tableBooks.items.map((item) => {
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
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <StyledTableCell component="th" scope="row">
                          {title}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {authors?.join(", ")}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {item.id}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          <a href={infoLink}>{infoLink}</a>
                        </StyledTableCell>
                      </StyledTableRow>
                      {item.id === currentDetails && <BooksDetails />}
                    </React.Fragment>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
      <div>BooksPage</div>
    </>
  );
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
