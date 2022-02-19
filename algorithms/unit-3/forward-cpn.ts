let steps = "";
const solve = (
  arrayOfStringV: string[],
  arrayOfStringW: string[],
  inputStringX: string,
  inputStringY: string,
  alpha: number,
  a: number
) => {
  const X = inputStringX.split(" ").map((x) => Number(x));
  const Y = inputStringY.split(" ").map((x) => Number(x));
  const V = arrayOfStringV.map((strV) => strV.split(" ").map((v) => Number(v)));
  const W = arrayOfStringW.map((strW) => strW.split(" ").map((w) => Number(w)));
  const jMax = V[0].length === W[0].length ? W[0].length : 0;
  const updateWeights = (J: number, phaseNo: number) => {
    steps += `Weight updation between x-input and cluster-layer,\n v<sub>iJ</sub>(new) = v<sub>iJ</sub>(old) + α[x<sub>i</sub> - v<sub>iJ</sub>(old)]\n\n For i = 1 to ${V.length} and J = ${J}, we obtain\n\n`;
    for (let i = 0; i < V.length; ++i) {
      const newVal = V[i][J - 1] + alpha * (X[i] - V[i][J - 1]);
      steps += `v<sub>${i + 1}${J}(new)</sub> = v<sub>${
        i + 1
      }${J}(old)</sub> + α[x<sub>${i + 1}</sub> - v<sub>${
        i + 1
      }${J}(old)</sub>] = ${V[i][J - 1]} + ${alpha}(${X[i]} - ${
        V[i][J - 1]
      }) = ${newVal}\n\n\n`;
      V[i][J - 1] = Math.round(newVal * 1000) / 1000;
    }

    if (phaseNo === 2) {
      steps += `Weight updation between y-input and cluster-layer,\n w<sub>kJ</sub>(new) = w<sub>kJ</sub>(old) + β[y<sub>k</sub> - w<sub>kJ</sub>(old)]\n\n For k = 1 to ${W.length} and J = ${J}, we obtain,\n\n`;
      for (let i = 0; i < W.length; ++i) {
        const newVal = W[i][J - 1] + a * (Y[i] - W[i][J - 1]);
        steps += `w<sub>${i + 1}${J}(new)</sub> = w<sub>${
          i + 1
        }${J}(old)</sub> + β[y<sub>${i + 1}</sub> - w<sub>${
          i + 1
        }${J}(old)</sub>] = ${W[i][J - 1]} + ${a}(${Y[i]} - ${
          W[i][J - 1]
        }) = ${newVal}\n\n\n`;
        W[i][J - 1] = Math.round(newVal * 1000) / 1000;
      }
    }
    steps += `Thus, updated weights are \n\n V = ${V.join(" ")}   W =${W.join(
      " "
    )}`;
  };

  for (let i = 1; i <= 2; ++i) {
    steps += `<h4>Phase ${i} of training</h4>\n`;
    const arrOfDs = Array(jMax)
      .fill(0)
      .map((_temp, J) => getD(J + 1, V, W, X, Y));

    const winningIndex = arrOfDs.indexOf(Math.min(...arrOfDs)) + 1;

    steps += `Since D${winningIndex} is minimum, therefore,  the winner unit index is J = ${winningIndex}.\n Updating the weights on the winner unit, \n\n`;
    updateWeights(winningIndex, i);
  }

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
