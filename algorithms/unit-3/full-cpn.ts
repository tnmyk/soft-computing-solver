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

  const updateWeights = (J: number) => {
    J -= 1;
    for (let i = 0; i < V.length; ++i) {
      V[i][J] += alpha * (X[i] - V[i][J]);
    }
    for (let i = 0; i < W.length; ++i) {
      W[i][J] += beta * (Y[i] - W[i][J]);
    }
  };

  let D1 = getD(1, V, W, X, Y);
  let D2 = getD(2, V, W, X, Y);

  if (D1 < D2) {
    // D1 is winning, update on J = 1
    updateWeights(1);
  } else {
    // D2 is winning, update on J = 2
    updateWeights(2);
  }
  return { W, V };
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
  for (let i = 0; i < V.length; ++i) {
    sum += Math.pow(X[i] - V[i][J], 2);
  }
  for (let i = 0; i < W.length; ++i) {
    sum += Math.pow(Y[i] - W[i][J], 2);
  }
  // console.log(sum);
  return sum;
};

export default solve;
