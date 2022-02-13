import { useEffect, useState } from "react";
import { Input } from "../../../components/Input/Input";
import { StyledSolver } from "../../../components/styles/styledSolver";

const SolvePage = () => {
  const [numberOfPatterns, setNumberOfPatterns] = useState<number>(0);
  const [numberOfInputs, setNumberOfInputs] = useState<number>(0);
  const [arrayOfInputs, setArrayOfInputs] = useState<string[]>([]);
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
          if (!value || value > 20) return setNumberOfInputs(0);
          setNumberOfInputs(value);
        }}
      />
      {arrayOfInputs.map((value, index) => {
        return (
          <Input
            width="25rem"
            placeholder={
              Array(numberOfInputs)
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
    </StyledSolver>
  );
};

export default SolvePage;
