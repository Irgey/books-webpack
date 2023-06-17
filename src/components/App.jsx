import { Routes, Route, NavLink } from 'react-router-dom';

import styled from '@emotion/styled';
import { HomePage } from 'pages/HomePage';
import { BooksPage } from 'pages/BooksPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import { Layout } from './layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {' '}
        <Route path="books" element={<BooksPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
