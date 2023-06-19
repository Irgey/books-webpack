import PropTypes from 'prop-types';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import rehypeRaw from 'rehype-raw';
import {
  StyledImg,
  StyledTableCell,
  StyledTableRowDetails,
} from './BookDetails.styled';

import s from '../../pages/styles.module.css';
export const BooksDetails = ({ detailedData }) => {
  const {
    volumeInfo: {
      publisher,
      publishedDate,
      description,
      imageLinks,
      title,
      subtitle,
      authors,
      printType,
      pageCount,
    },
  } = detailedData;
  return (
    detailedData && (
      <StyledTableRowDetails>
        <StyledTableCell colSpan={4}>
          <div>
            <h2>
              <span>{title}</span>
              {subtitle && <span>,{subtitle}</span>}
            </h2>
            <div className={s.contentWrapper}>
              <div>
                <StyledImg
                  alt={title}
                  src={
                    imageLinks.medium ||
                    imageLinks.small ||
                    imageLinks.thumbnail
                  }
                />
              </div>
              <ul className={s.contentList}>
                {authors && (
                  <li>
                    <p>
                      <b>Author: </b>
                      {authors.join(', ')}
                    </p>
                  </li>
                )}
                {publisher && (
                  <li>
                    <p>
                      <b>Publisher: </b>
                      {publisher},{publishedDate}
                    </p>
                  </li>
                )}
                {printType && (
                  <li>
                    <p>
                      <b>Print type: </b>
                      {printType}
                    </p>
                  </li>
                )}
                {pageCount && (
                  <li>
                    <p>
                      <b>Page count: </b>
                      {pageCount}
                    </p>
                  </li>
                )}
                {description && (
                  <li>
                    {' '}
                    <b>Description: </b>
                    <ReactMarkdown
                      className={s.descrContainer}
                      rehypePlugins={[rehypeRaw]}
                    >
                      {description}
                    </ReactMarkdown>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </StyledTableCell>
      </StyledTableRowDetails>
    )
  );
};

BooksDetails.propTypes = {
  detailedData: PropTypes.shape({
    id: PropTypes.string,
    volumeInfo: PropTypes.object,
  }),
};
