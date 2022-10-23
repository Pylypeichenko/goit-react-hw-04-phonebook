import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  align-items: baseline;

  :nth-of-type(n + 2) {
    margin-top: 15px;
  }
`;
