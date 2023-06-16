import { useQuery } from "@tanstack/react-query";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import s from "../../pages/styles.module.css";
import { getFullInfoById } from "../../services/books-api";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeRaw from "rehype-raw";
import { styled } from "@mui/material";
import { useSearchParams } from "react-router-dom";

export const BooksDetails = () => {
  const [searchParams] = useSearchParams();
  const bookId = searchParams.get("details");
  const { data: detailedData } = useQuery({
    queryKey: ["bookInfo", bookId],
    queryFn: () => getFullInfoById(bookId),
    keepPreviousData: true,
  });

  return (
    <StyledTableRow>
      <StyledTableCell colSpan={4}>
        <div data-aos="fade-up">
          {detailedData && (
            <>
              <h2>
                <span>{detailedData.volumeInfo.title}</span>
                {detailedData.volumeInfo.subtitle && (
                  <span>,{detailedData.volumeInfo.subtitle}</span>
                )}
              </h2>
              <div className={s.contentWrapper}>
                <div>
                  {" "}
                  <img src={detailedData.volumeInfo.imageLinks.thumbnail} />
                </div>
                <ul className={s.contentList}>
                  {detailedData.volumeInfo.authors && (
                    <li>
                      <p>
                        <b>Author: </b>
                        {detailedData.volumeInfo.authors.join(", ")}
                      </p>
                    </li>
                  )}
                  {detailedData.volumeInfo.publisher && (
                    <li>
                      <p>
                        <b>Publisher: </b>
                        {detailedData.volumeInfo.publisher},
                        {detailedData.volumeInfo.publishedDate}
                      </p>
                    </li>
                  )}
                  {detailedData.volumeInfo.printType && (
                    <li>
                      <p>
                        <b>Print type: </b>
                        {detailedData.volumeInfo.printType}
                      </p>
                    </li>
                  )}
                  {detailedData.volumeInfo.pageCount && (
                    <li>
                      <p>
                        <b>Page count: </b>
                        {detailedData.volumeInfo.pageCount}
                      </p>
                    </li>
                  )}
                  {detailedData.volumeInfo.description && (
                    <li>
                      {" "}
                      <b>Description: </b>
                      <ReactMarkdown
                        className={s.descrContainer}
                        rehypePlugins={[rehypeRaw]}
                      >
                        {detailedData.volumeInfo.description}
                      </ReactMarkdown>{" "}
                    </li>
                  )}
                </ul>
              </div>
            </>
          )}
        </div>
      </StyledTableCell>
    </StyledTableRow>
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
