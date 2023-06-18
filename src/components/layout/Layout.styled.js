import styled from '@emotion/styled';

import { ReactComponent as BookPic } from '../../images/book.svg';

export const StyledMain = styled.main`
  padding-top: 84px;
  padding-bottom: 24px;
  position: relative;
  min-height: calc(100vh - 120px);
`;

export const StyledBookPic = styled(BookPic)`
  fill: #1976d2;
  width: 250px;
  height: 250px;
  position: absolute;
  right: 5px;
  bottom: 5px;
  @media screen and (max-width: 480px) {
    width: 120px;
    height: 120px;
  }
`;
