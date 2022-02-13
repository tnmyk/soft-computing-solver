import { useEffect, useState } from "react";
import styled from "styled-components";
import Solve from "../../algorithms/implement-using-perceptron";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";

const SolvePage = () => {
  const [numberOfInputs, setNumberOfInputs] = useState<number>(0);
  const [arrayOfInputs, setArrayOfInputs] = useState<String[]>([]);
  const [b, setB] = useState(0);
  const [alpha, setAlpha] = useState(1);
  const [ans, setAns] = useState<any>();
  useEffect(() => {
    if (numberOfInputs === 0) return setArrayOfInputs([]);
    setArrayOfInputs(
      Array.apply(null, Array(Math.pow(2, numberOfInputs))).map(
        String.prototype.valueOf,
        ""
      )
    );
  }, [numberOfInputs]);

  const handleSubmit = () => {
    const ansArray = Solve(arrayOfInputs, numberOfInputs, b, alpha);
    setAns(ansArray);
  };

  return (
    <StyledSolver>
      <h1>Implement Using Perceptron</h1>
      <Input
        type="number"
        max="4"
        value={numberOfInputs > 0 ? String(numberOfInputs) : ""}
        placeholder="Enter Number of Rows"
        onChange={(e) => {
          const value = parseInt(e.target.value);
          if (value > 4) return;
          setNumberOfInputs(value ? parseInt(e.target.value) : 0);
        }}
      />
      <Input
        placeholder="Enter Alpha (default: 1)"
        type="number"
        onChange={(e) => {
          setAlpha(parseInt(e.target.value));
        }}
      />
      <Input
        placeholder="Enter Initial B (default: 0)"
        type="number"
        onChange={(e) => {
          setAlpha(parseInt(e.target.value));
        }}
      />

      {arrayOfInputs.map((value, index) => {
        return (
          <Input
            key={index}
            value={String(value)}
            onChange={(e) => {
              const value = e.target.value;
              const tempArr = [...arrayOfInputs];
              tempArr[index] = value;
              setArrayOfInputs(tempArr);
            }}
            type="text"
            placeholder="x1 &nbsp; x2  &nbsp;... xn  &nbsp; t"
          />
        );
      })}
      <Button onClick={handleSubmit}>Submit</Button>
      <Table>
        <tr>
          <th>x1</th>
          <th>x2</th>
          <th>1</th>
          <th>t</th>
          <th>Yin</th>
          <th>Y</th>
          <th>Delta W1</th>
          <th>Delta W2</th>
          <th>Delta B</th>
          <th>w1</th>
          <th>w2</th>
          <th>b</th>
        </tr>
        {ans &&
          ans.map((row: number[], idx: number) => {
            return (
              <>
                {idx % Math.pow(2, numberOfInputs) === 0 && (
                  <>
                    EPOCH - {Math.round(idx / Math.pow(2, numberOfInputs)) + 1}
                  </>
                )}
                <tr>
                  {row.map((ele) => {
                    return <td>{ele}</td>;
                  })}
                </tr>
              </>
            );
          })}
      </Table>
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

const Table = styled.table`
  th,
  td {
    padding: 15px;
  }
`;
