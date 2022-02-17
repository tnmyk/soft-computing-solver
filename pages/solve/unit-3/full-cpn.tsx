import { useEffect, useState } from "react";
import { Input } from "../../../components/Input/Input";
import { StyledSolver } from "../../../components/styles/styledSolver";

const SolvePage = () => {
  const [numberOfX, setNumberOfX] = useState(0);
  const [numberOfZ, setNumberOfZ] = useState(0);
  const [numberOfY, setNumberOfY] = useState(0);
  const [V, setV] = useState<string[]>([]);
  const [W, setW] = useState<string[]>([]);
  useEffect(() => {
    setV(Array(numberOfX).fill(""));
  }, [numberOfX]);
  useEffect(() => {
    setW(Array(numberOfY).fill(""));
  }, [numberOfY]);
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
      {V.map((_, xIndex) => {
        return (
          <Input
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
      {W.map((_, yIndex) => {
        return (
          <Input
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
    </StyledSolver>
  );
};
export default SolvePage;
