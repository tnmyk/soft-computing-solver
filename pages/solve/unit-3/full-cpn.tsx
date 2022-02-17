import { useState } from "react";
import { Input } from "../../../components/Input/Input";
import { StyledSolver } from "../../../components/styles/styledSolver";

const SolvePage = () => {
  const [numberOfX, setNumberOfX] = useState(0);
  const [numberOfZ, setNumberOfZ] = useState(0);
  const [numberOfY, setNumberOfY] = useState(0);

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
      {new Array(numberOfX).fill(0).map((_x) => {
        return <Input placeholder={Array(numberOfZ).fill(0).join(" ")} />;
      })}
    </StyledSolver>
  );
};
export default SolvePage;
