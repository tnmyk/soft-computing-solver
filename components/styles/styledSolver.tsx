import styled from "styled-components";

export const StyledSolver = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
`;

export const Table = styled.table`
  th,
  td {
    padding: 15px;
    border-width: 0;
    /* border: 1px solid #555555; */
  }
  th {
    background-color: #aaaaff;
  }
  td {
    background-color: #c7c7ff;
  }
`;
