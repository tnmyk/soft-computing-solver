import { useEffect, useState } from "react";
import { Button } from "../../../components/Button/Button";
import { Input } from "../../../components/Input/Input";
import { StyledSolver } from "../../../components/styles/styledSolver";

const SolvePage = () => {
  const [numberOfX, setNumberOfX] = useState(0);
  const [numberOfZ, setNumberOfZ] = useState(0);
  const [numberOfY, setNumberOfY] = useState(0);
  const [V, setV] = useState<string[]>([]);
  const [W, setW] = useState<string[]>([]);
  const [xInput, setXInput] = useState<string>("");
  const [yInput, setYInput] = useState<string>("");
  useEffect(() => {
    setV(Array(numberOfX).fill(""));
  }, [numberOfX]);
  useEffect(() => {
    setW(Array(numberOfY).fill(""));
  }, [numberOfY]);

  const handleSubmit = () => {};
  return (
    <StyledSolver>
      <h1>Full CPN solver</h1>
      <Input
        placeholder="Number of X inputs"
        onChange={(e) => {
          const value = parseInt(e.target.value);
          if (value) setNumberOfX(value);
          else setNumberOfX(0);
        }}
      />
      <Input
        placeholder="Number of Z inputs"
        onChange={(e) => {
          const value = parseInt(e.target.value);
          if (value) setNumberOfZ(value);
          else setNumberOfZ(0);
        }}
      />
      <Input
        placeholder="Number of Y inputs"
        onChange={(e) => {
          const value = parseInt(e.target.value);
          if (value) setNumberOfY(value);
          else setNumberOfY(0);
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
export default SolvePage;
