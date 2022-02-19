import { useEffect, useState } from "react";
import solve from "../../../algorithms/unit-3/forward-cpn";
import { Button } from "../../../components/Button/Button";
import { Input } from "../../../components/Input/Input";
import { StyledSolver } from "../../../components/styles/styledSolver";

const SolverPage = () => {
  const [numberOfX, setNumberOfX] = useState(0);
  const [numberOfZ, setNumberOfZ] = useState(0);
  const [numberOfY, setNumberOfY] = useState(0);
  const [V, setV] = useState<string[]>([]);
  const [W, setW] = useState<string[]>([]);
  const [xInput, setXInput] = useState<string>("");
  const [yInput, setYInput] = useState<string>("");
  const [alpha, setAlpha] = useState<number>(0);
  const [a, setA] = useState<number>(0);
  const [steps, setSteps] = useState("");
  const [ans, setAns] = useState<{ [key: string]: number[][] }>();
  useEffect(() => {
    setV(Array(numberOfX).fill(""));
  }, [numberOfX]);
  useEffect(() => {
    setW(Array(numberOfY).fill(""));
  }, [numberOfY]);

  const handleSubmit = () => {
    const {
      V: ansV,
      W: ansW,
      steps: ansSteps,
    } = solve(V, W, xInput, yInput, alpha, a);
    setSteps(ansSteps);
    setAns({ V: ansV, W: ansW });
  };
  return (
    <StyledSolver>
      <h1>Forward CPN Solver</h1>
      <Input
        placeholder="Number of X inputs"
        type="number"
        value={numberOfX > 0 ? numberOfX : ""}
        onChange={(e) => {
          const value = parseInt(e.target.value);
          if (!value || value > 10 || value < 0) setNumberOfX(0);
          else setNumberOfX(value);
        }}
      />
      <Input
        placeholder="Number of Z inputs"
        type="number"
        value={numberOfZ > 0 ? numberOfZ : ""}
        onChange={(e) => {
          const value = parseInt(e.target.value);
          if (!value || value > 10 || value < 0) setNumberOfZ(0);
          else setNumberOfZ(value);
        }}
      />
      <Input
        placeholder="Number of Y inputs"
        type="number"
        value={numberOfY > 0 ? numberOfY : ""}
        onChange={(e) => {
          const value = parseInt(e.target.value);
          if (!value || value > 10 || value < 0) setNumberOfY(0);
          else setNumberOfY(value);
        }}
      />
      <Input
        placeholder="Alpha"
        type="number"
        value={alpha > 0 ? alpha : ""}
        onChange={(e) => {
          const value = Number(e.target.value);
          if (!value || value > 1 || value < 0) setAlpha(0);
          else setAlpha(value);
        }}
      />
      <Input
        placeholder="a"
        type="number"
        value={a > 0 ? a : ""}
        onChange={(e) => {
          const value = Number(e.target.value);
          if (!value || value > 1 || value < 0) setA(0);
          else setA(value);
        }}
      />

      {numberOfX > 0 && (
        <>
          <h4>Enter x inputs</h4>
          <Input
            placeholder={Array(numberOfX)
              .fill(0)
              .map((_, idx) => `x${idx + 1}`)
              .join("   ")}
            onChange={(e) => {
              const value = e.target.value;
              if (value) setXInput(value);
              else setXInput("");
            }}
          />
        </>
      )}
      {numberOfY > 0 && (
        <>
          <h4>Enter y inputs</h4>
          <Input
            placeholder="Enter y input"
            onChange={(e) => {
              const value = e.target.value;
              if (value) setYInput(value);
              else setYInput("");
            }}
          />
        </>
      )}
      {numberOfX * numberOfZ > 0 && (
        <>
          <br />
          <h3>Enter weights for V</h3>
          {V.map((_, xIndex) => {
            return (
              <Input
                key={xIndex}
                placeholder={Array(numberOfZ)
                  .fill(0)
                  .map((_, zIndex) => `x${xIndex + 1}z${zIndex + 1}`)
                  .join("   ")}
                onChange={(e) => {
                  const tempArr = [...V];
                  tempArr[xIndex] = e.target.value;
                  setV(tempArr);
                }}
              />
            );
          })}
        </>
      )}
      {numberOfY * numberOfZ > 0 && (
        <>
          <br />
          <h3>Enter weights for W</h3>

          {W.map((_, yIndex) => {
            return (
              <Input
                key={yIndex}
                placeholder={Array(numberOfZ)
                  .fill(0)
                  .map((_, zIndex) => `y${yIndex + 1}z${zIndex + 1}`)
                  .join("   ")}
                onChange={(e) => {
                  const tempArr = [...W];
                  tempArr[yIndex] = e.target.value;
                  setW(tempArr);
                }}
              />
            );
          })}
        </>
      )}
      <Button onClick={handleSubmit}>Submit</Button>
    </StyledSolver>
  );
};

export default SolverPage;
