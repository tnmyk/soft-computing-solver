import { useEffect, useState } from "react";
import Solve from "../../../algorithms/unit-1/classify-2d-input-pattern-using-perceptron";
import { Button } from "../../../components/Button/Button";
import { Input } from "../../../components/Input/Input";
import { StyledSolver } from "../../../components/styles/styledSolver";

const SolvePage = () => {
  const [numberOfPatterns, setNumberOfPatterns] = useState<number>(0);
  const [numberOfXInputs, setNumberOfXInputs] = useState<number>(0);
  const [arrayOfInputs, setArrayOfInputs] = useState<string[]>([]);
  const [alpha, setAlpha] = useState<number>(1);
  const [ans, setAns] = useState<Array<Array<number>>>();
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
      console.log(solved);
      setAns(solved);
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

      {ans &&
        ans!.map((row) => {
          return (
            <div>
              {row.map((w) => {
                return w;
              })}
            </div>
          );
        })}
    </StyledSolver>
  );
};

export default SolvePage;
