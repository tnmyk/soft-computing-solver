let steps = "";
const solve = (
  arrayOfStringV: string[],
  arrayOfStringW: string[],
  inputStringX: string,
  inputStringY: string,
  alpha: number,
  beta: number
) => {
  const X = inputStringX.split(" ").map((x) => Number(x));
  const Y = inputStringY.split(" ").map((x) => Number(x));
  const V = arrayOfStringV.map((strV) => strV.split(" ").map((v) => Number(v)));
  const W = arrayOfStringW.map((strW) => strW.split(" ").map((w) => Number(w)));
  const jMax = V[0].length === W[0].length ? W[0].length : 0;
  const updateWeights = (J: number) => {
    steps += `Weight updation between x-input and cluster-layer,\n v<sub>iJ</sub>(new) = v<sub>iJ</sub>(old) + α[x<sub>i</sub> - v<sub>iJ</sub>(old)]\n\n For i = 1 to ${V.length} and J = ${winningIndex}, we obtain\n\n`;
    for (let i = 0; i < V.length; ++i) {
      const newVal = V[i][J - 1] + alpha * (X[i] - V[i][J - 1]);
      steps += `v<sub>${i + 1}${J}(new)</sub> = v<sub>${
        i + 1
      }${J}(old)</sub> + α[x<sub>${i + 1}</sub> - v<sub>${
        i + 1
      }${J}(old)</sub>] = ${V[i][J - 1]} + ${alpha}(${X[i]} - ${
        V[i][J - 1]
      }) = ${newVal}\n\n\n`;
      V[i][J - 1] = newVal;
    }

    steps += `Weight updation between y-input and cluster-layer,\n w<sub>kJ</sub>(new) = w<sub>kJ</sub>(old) + β[y<sub>k</sub> - w<sub>kJ</sub>(old)]\n\n For k = 1 to ${W.length} and J = ${winningIndex}, we obtain,\n\n`;
    for (let i = 0; i < W.length; ++i) {
      const newVal = W[i][J - 1] + beta * (Y[i] - W[i][J - 1]);
      steps += `w<sub>${i + 1}${J}(new)</sub> = w<sub>${
        i + 1
      }${J}(old)</sub> + β[y<sub>${i + 1}</sub> - w<sub>${
        i + 1
      }${J}(old)</sub>] = ${W[i][J - 1]} + ${beta}(${Y[i]} - ${
        W[i][J - 1]
      }) = ${newVal}\n\n\n`;
      W[i][J - 1] = newVal;
    }
  };

  const arrOfDs = Array(jMax)
    .fill(0)
    .map((_temp, J) => getD(J + 1, V, W, X, Y));

  const winningIndex = arrOfDs.indexOf(Math.min(...arrOfDs)) + 1;

  steps += `Since D${winningIndex} is minimum, therefore,  the winner unit index is J = ${winningIndex}.\n Updating the weights on the winner unit, \n\n`;
  updateWeights(winningIndex);

  return { W, V, steps };
};

const getD = (
  J: number,
  V: number[][],
  W: number[][],
  X: number[],
  Y: number[]
) => {
  // D(j)
  J -= 1;
  let sum = 0;
  steps += `D(${J + 1}) = `;
  let stepsWithVariables = "";
  let stepsWithReplacedValues = "";
  let stepsWithValues = "";
  for (let i = 0; i < V.length; ++i) {
    stepsWithVariables += `+ (x<sub>${i + 1}</sub> - v<sub>${i + 1}${
      J + 1
    }</sub>)<sup>2</sup> `;
    stepsWithReplacedValues += `+ (${X[i]} - ${V[i][J]})<sup>2</sup> `;
    const toAdd = Math.pow(X[i] - V[i][J], 2);
    stepsWithValues += `+ ${toAdd} `;
    sum += toAdd;
  }
  for (let i = 0; i < W.length; ++i) {
    stepsWithVariables += `+ (y<sub>${i + 1}</sub> - w<sub>${i + 1}${
      J + 1
    }</sub>)<sup>2</sup> `;
    stepsWithReplacedValues += `+ (${Y[i]} - ${W[i][J]})<sup>2</sup> `;
    const toAdd = Math.pow(Y[i] - W[i][J], 2);
    stepsWithValues += `+ ${toAdd} `;
    sum += toAdd;
  }
  steps +=
    stepsWithVariables +
    "\n= " +
    stepsWithReplacedValues +
    "\n= " +
    stepsWithValues +
    "\n= " +
    sum +
    "\n\n";
  return sum;
};

export default solve;
