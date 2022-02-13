import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import Solve from "../../algorithms/implement-table-using-perceptron";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";

const SolvePage = () => {
  const [numberOfInputs, setNumberOfInputs] = useState<number>(0);
  const [arrayOfInputs, setArrayOfInputs] = useState<String[]>([]);
  const [numberOfIterations, setNumberOfIterations] = useState<number>(8);
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
    try {
      const ansArray = Solve(
        arrayOfInputs,
        numberOfInputs,
        b,
        alpha,
        numberOfIterations
      );
      setAns(ansArray);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledSolver>
      <h1>Implement Table Using Perceptron</h1>
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
          setB(parseInt(e.target.value));
        }}
      />
      <Input
        placeholder="Enter Number of iterations"
        type="number"
        onChange={(e) => {
          setNumberOfIterations(parseInt(e.target.value));
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
            width="20rem"
            type="text"
            placeholder="x1 &nbsp; x2 &nbsp;.. xn &nbsp;t (space-separated)"
          />
        );
      })}
      <Button onClick={handleSubmit}>Submit</Button>
      <Table>
        <tbody>
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
                <Fragment key={idx}>
                  {idx % Math.pow(2, numberOfInputs) === 0 && (
                    <>
                      EPOCH -{" "}
                      {Math.round(idx / Math.pow(2, numberOfInputs)) + 1}
                    </>
                  )}
                  <tr>
                    {row.map((ele, idx) => {
                      return <td key={idx}>{ele}</td>;
                    })}
                  </tr>
                </Fragment>
              );
            })}
        </tbody>
      </Table>
    </StyledSolver>
  );
};
export default SolvePage;

export const StyledSolver = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
`;

const Table = styled.table`
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
