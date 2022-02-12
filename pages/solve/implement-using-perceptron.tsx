import { useEffect, useState } from "react";
import styled from "styled-components";
import { IconButon } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { HorizontalFlex } from "../../components/Layout/Container";

const SolvePage = () => {
  const [numberOfRows, setNumberOfRows] = useState<Number>(0); //nx
  const [arrayOfInputs, setArrayOfInputs] = useState<String[]>([]);
  useEffect(() => {
    setArrayOfInputs(
      Array.apply(null, Array(numberOfRows)).map(String.prototype.valueOf, "")
    );
    console.log(arrayOfInputs);
  }, [numberOfRows]);
  return (
    <StyledSolver>
      <h1>Implement Using Perceptron</h1>
      <Input
        type="number"
        max="12"
        value={numberOfRows > 0 ? String(numberOfRows) : ""}
        placeholder="Enter Number of Rows"
        onChange={(e) => {
          const value = parseInt(e.target.value);
          if (value > 12) return;
          setNumberOfRows(value ? parseInt(e.target.value) : 0);
        }}
      />
      {arrayOfInputs.map((value, index) => {
        return (
          <Input
            value={String(value)}
            onChange={(e) => {
              const value = e.target.value;
              const tempArr = [...arrayOfInputs];
              tempArr[index] = value;
              setArrayOfInputs(tempArr);
              console.log(arrayOfInputs);
            }}
            type="text"
            placeholder="x1 &nbsp; x2  &nbsp;... xn  &nbsp; t"
          />
        );
      })}
    </StyledSolver>
  );
};
export default SolvePage;

const StyledSolver = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
`;
