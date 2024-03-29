import styled from "styled-components";

export const StyledSolver = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  min-height: 85vh;
  h1 {
    margin-bottom: 1rem;
    text-align: center;
  }
`;

export const Table = styled.table`
  th,
  td {
    padding: 15px;
    border-width: 0;
  }
  th {
    background-color: #414547;
  }
  td {
    background-color: #303435;
  }
`;

export const Matrix = styled.div`
  display: inline-flex;
  vertical-align: middle;
  margin: 0 0.5rem;
  padding: 0.5rem;
  flex-direction: column;
  row-gap: 1rem;
  border-left: 1px solid var(--white);
  border-right: 1px solid var(--white);
  div {
    display: flex;
    column-gap: 1rem;
  }
`;

export const Steps = styled.div`
  white-space: pre-line;
  width: 80%;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;
