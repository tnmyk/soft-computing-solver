const solve = (
  n: number,
  m: number,
  p: number,
  alpha: number,
  inputStringArr: string[],
  bottomUpWeights: string,
  topDownWeights: string
) => {
  const getNorm = (s: number[]) => {
    return s.reduce((prv, crt) => prv + crt);
  };
  const getNetInputsToEachNode = (
    s: number[],
    bArr: number[][],
    n: number,
    m: number
  ): number[] => {
    let yArr: number[] = Array(m).fill(0);
    for (let i = 0; i < n; ++i) {
      for (let j = 0; j < m; ++j) {
        yArr[j] += bArr[i][j] * s[i];
      }
    }
    return yArr;
  };
  const inputArr = inputStringArr.map((inputStr) =>
    inputStr.split(" ").map((inn) => Number(inn))
  );
  const bArr = bottomUpWeights
    .trim()
    .split("\n")
    .map((row) =>
      row
        .trim()
        .split(" ")
        .map((inn) => Number(inn))
    );
  const tArr = topDownWeights
    .trim()
    .split("\n")
    .map((row) =>
      row
        .trim()
        .split(" ")
        .map((inn) => Number(inn))
    );
  for (let inputNo = 0; inputNo < inputArr.length; ++inputNo) {
    // replace 1 with n
    console.log({ inputNo });
    const snorm = getNorm(inputArr[inputNo]);
    console.log({ snorm });
    const yArr = [
      ...Array.from(
        new Set(getNetInputsToEachNode(inputArr[inputNo], bArr, n, m))
      ),
    ];
    console.log({ yArr });
    let winningIndex!: number;
    let xnorm = -1;
    let x!: number[];
    while (xnorm / snorm < p) {
      winningIndex = yArr.indexOf(Math.max(...yArr)) + 1;
      yArr[winningIndex - 1] = -1;
      console.log({ winningIndex });

      x = inputArr[inputNo].map(
        (_, idx) => inputArr[inputNo][idx] * tArr[winningIndex - 1][idx]
      );
      console.log({ x });

      xnorm = getNorm(x);
    }

    console.log({ xnorm });

    // reset is false, proceed to step 12
    for (let i = 0; i < bArr.length; ++i) {
      bArr[i][winningIndex - 1] = (alpha * x[i]) / (alpha - 1 + xnorm);
    }
    tArr[winningIndex - 1] = x;

    console.log({ bArr }, { tArr });
  }
};

export default solve;
