import { Routes, Route, NavLink } from 'react-router-dom';

import styled from '@emotion/styled';
import { HomePage } from 'pages/HomePage';
import { BooksPage } from 'pages/BooksPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export const App = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/books">Books</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="books" element={<BooksPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
