import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import rehypeRaw from 'rehype-raw';
import { StyledTableCell, StyledTableRowDetails } from './BookDetails.styled';

import s from '../../pages/styles.module.css';
export const BooksDetails = ({ detailedData }) => {
  return (
    <StyledTableRowDetails>
      <StyledTableCell colSpan={4}>
        <div>
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
                  <img
                    alt={detailedData.volumeInfo.title}
                    src={detailedData.volumeInfo.imageLinks.thumbnail}
                  />
                </div>
                <ul className={s.contentList}>
                  {detailedData.volumeInfo.authors && (
                    <li>
                      <p>
                        <b>Author: </b>
                        {detailedData.volumeInfo.authors.join(', ')}
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
                      {' '}
                      <b>Description: </b>
                      <ReactMarkdown
                        className={s.descrContainer}
                        rehypePlugins={[rehypeRaw]}
                      >
                        {detailedData.volumeInfo.description}
                      </ReactMarkdown>
                    </li>
                  )}
                </ul>
              </div>
            </>
          )}
        </div>
      </StyledTableCell>
    </StyledTableRowDetails>
  );
};
