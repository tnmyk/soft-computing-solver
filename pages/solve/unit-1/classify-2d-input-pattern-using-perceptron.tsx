import { useEffect, useState } from "react";
import styled from "styled-components";
import Solve from "../../../algorithms/unit-1/classify-2d-input-pattern-using-perceptron";
import { Button } from "../../../components/Button/Button";
import { Input } from "../../../components/Input/Input";
import {
  Steps,
  StyledSolver,
  Table,
} from "../../../components/styles/styledSolver";

const SolvePage = () => {
  const [numberOfPatterns, setNumberOfPatterns] = useState<number>(0);
  const [numberOfXInputs, setNumberOfXInputs] = useState<number>(0);
  const [arrayOfInputs, setArrayOfInputs] = useState<string[]>([]);
  const [alpha, setAlpha] = useState<number>(1);
  const [table, setTable] = useState<Array<Array<number>>>();
  const [steps, setSteps] = useState<string[]>();
  useEffect(() => {
    if (numberOfPatterns === 0) {
      return setArrayOfInputs([]);
    }
    setArrayOfInputs(
      Array.apply(null, Array(numberOfPatterns)).map(
        String.prototype.valueOf,
        ""
      )
    );
  }, [numberOfPatterns]);

  const handleSubmit = () => {
    try {
      const solved = Solve(
        arrayOfInputs,
        numberOfPatterns,
        numberOfXInputs,
        alpha
      );
      setTable(solved.table);
      setSteps(solved.steps);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <StyledSolver>
      <h1>Classify 2D input-pattern using Perceptron</h1>
      <Input
        type="number"
        placeholder="Enter number of patterns"
        onChange={(e) => {
          const value = parseInt(e.target.value);
          if (!value || value > 10) return setNumberOfPatterns(0);
          setNumberOfPatterns(value);
        }}
      />
      <Input
        type="number"
        placeholder="Enter number of inputs(x)"
        onChange={(e) => {
          const value = parseInt(e.target.value);
          if (!value || value > 20) return setNumberOfXInputs(0);
          setNumberOfXInputs(value);
        }}
      />
      <Input
        type="number"
        placeholder="Enter alpha (default 1)"
        onChange={(e) => {
          const value = parseInt(e.target.value);
          if (!value) return setAlpha(1);
          setAlpha(value);
        }}
      />
      {arrayOfInputs.map((value, index) => {
        return (
          <Input
            key={index}
            width="25rem"
            placeholder={
              Array(numberOfXInputs)
                .fill(0)
                .map((_, idx) => "x" + (idx + 1))
                .join("   ") + "   1   t (space-separated)"
            }
            onChange={(e) => {
              const tempArr = [...arrayOfInputs];
              tempArr[index] = e.target.value;
              setArrayOfInputs(tempArr);
            }}
          />
        );
      })}
      <Button onClick={handleSubmit}>Submit</Button>
      {table && (
        <>
          <Steps>
            {steps?.map((step, stepno) => {
              return (
                <div
                  key={`step-${stepno}`}
                  dangerouslySetInnerHTML={{ __html: step }}
                />
              );
            })}
          </Steps>
          <Table>
            <caption>Weights after each step</caption>
            <tbody>
              <tr>
                <td />
                {Array(table[0].length - 1)
                  .fill(0)
                  .map((_x, idx) => {
                    return <th key={`headings-${idx}`}>x{idx + 1}</th>;
                  })}
                <th>b</th>
              </tr>

              {table!.map((row, idx) => {
                return (
                  <tr key={`row-${idx}`}>
                    <td>Iteration - {idx + 1}</td>
                    {row.map((w, idx2) => {
                      return <td key={`row-${idx}-col-${idx2}`}>{w}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <u>Also draw diagram</u>
        </>
      )}
    </StyledSolver>
  );
};

export default SolvePage;
