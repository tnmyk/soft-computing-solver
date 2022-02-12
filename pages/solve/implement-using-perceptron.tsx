import styled from "styled-components";
import { Input } from "../../components/Input/Input";

const SolvePage = () => {
  return (
    <Main>
      <StyledSolver>
        <h1>Implement Using Perceptron</h1>
        <Input type="text" fontSize="1rem" placeholder="x1 &nbsp; x2  &nbsp;... xn  &nbsp; t" />
      </StyledSolver>
    </Main>
  );
};
export default SolvePage;

const Main = styled.div``;

const StyledSolver = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
