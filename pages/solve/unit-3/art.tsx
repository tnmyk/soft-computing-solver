import { useEffect, useState } from "react";
import solve from "../../../algorithms/unit-3/art";
import { Button } from "../../../components/Button/Button";
import { Input } from "../../../components/Input/Input";
import { TextArea } from "../../../components/Input/TextArea";
import { StyledSolver } from "../../../components/styles/styledSolver";

const SolverPage = () => {
  const [numberOfInputs, setNumberOfInputs] = useState(0);
  const [n, setN] = useState(0);
  const [numberOfClusters, setNumberOfClusters] = useState(0);
  const [p, setP] = useState(0);
  const [alpha, setAlpha] = useState(0);
  const [inputsArr, setInputsArr] = useState<string[]>([]);
  const [bottomUpWeights, setBottomUpWeights] = useState("");
  const [topDownWeights, setTopDownWeights] = useState("");
  useEffect(() => {
    setInputsArr(Array(numberOfInputs).fill(""));
  }, [numberOfInputs]);

  const handleSubmit = () => {
    solve(
      n,
      numberOfClusters,
      p,
      alpha,
      inputsArr,
      bottomUpWeights,
      topDownWeights
    );
  };
  return (
    <StyledSolver>
      <h1>Forward CPN Solver</h1>
      <Input
        placeholder="Number of inputs"
        type="number"
        value={numberOfInputs > 0 ? numberOfInputs : ""}
        onChange={(e) => {
          const value = parseInt(e.target.value);
          if (!value || value > 10 || value < 0) setNumberOfInputs(0);
          else setNumberOfInputs(value);
        }}
      />
      <Input
        placeholder="N"
        type="number"
        value={n > 0 ? n : ""}
        onChange={(e) => {
          const value = parseInt(e.target.value);
          if (!value || value > 10 || value < 0) setN(0);
          else setN(value);
        }}
      />
      <Input
        placeholder="Number of clusters"
        type="number"
        value={numberOfClusters > 0 ? numberOfClusters : ""}
        onChange={(e) => {
          const value = parseInt(e.target.value);
          if (!value || value > 10 || value < 0) setNumberOfClusters(0);
          else setNumberOfClusters(value);
        }}
      />
      <Input
        placeholder="Vigilance Parameter(0 < p <= 1)"
        type="number"
        width="20rem"
        value={p > 0 ? p : ""}
        onChange={(e) => {
          const value = Number(e.target.value);
          if (!value || value > 1 || value < 0) setP(0);
          else setP(value);
        }}
      />
      <Input
        placeholder="Alpha (α>1)"
        type="number"
        value={alpha > 1 ? alpha : ""}
        onChange={(e) => {
          const value = Number(e.target.value);
          if (!value || value <= 1) setAlpha(0);
          else setAlpha(value);
        }}
      />
      {inputsArr.map((_, inputIdx) => {
        return (
          <Input
            key={inputIdx}
            placeholder={`Input vector - ${inputIdx + 1}`}
            onChange={(e) => {
              const tempArr = [...inputsArr];
              tempArr[inputIdx] = e.target.value;
              setInputsArr(tempArr);
            }}
          />
        );
      })}
      <TextArea
        width="20rem"
        rows={5}
        placeholder={
          "Enter bottom-up weights matrix(leave empty if not given)\rExample:\r1 1 1\r2 2 2\r3 3 3\r"
        }
        onChange={(e) => {
          const value = e.target.value;
          setBottomUpWeights(value);
        }}
      />
      <TextArea
        width="20rem"
        rows={5}
        placeholder={
          "Enter top-down weights matrix(leave empty if not given)\rExample:\r1 1 1\r2 2 2\r3 3 3\r"
        }
        onChange={(e) => {
          const value = e.target.value;
          setTopDownWeights(value);
        }}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </StyledSolver>
  );
};

export default SolverPage;
