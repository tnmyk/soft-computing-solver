const solve = (
  n: number,
  m: number,
  p: number,
  alpha: number,
  inputStringArr: string[],
  bottomUpWeights: string,
  topDownWeights: string
) => {
  const steps = [];
  if (alpha === 0) alpha = 2;
  const getNorm = (s: number[]) => {
    return s.reduce((prv, crt) => prv + crt);
  };
  const getNetInputsToEachNode = (
    s: number[],
    bArr: number[][],
    n: number,
    m: number
  ): number[] => {
    let tempSteps = Array(m).fill("");
    let yArr: number[] = Array(m).fill(0);
    for (let i = 0; i < n; ++i) {
      for (let j = 0; j < m; ++j) {
        tempSteps[j] += `+ ${bArr[i][j]}(${s[i]})`;
        yArr[j] += bArr[i][j] * s[i];
      }
    }
    tempSteps = tempSteps.map(
      (stp, idx) => `y<sub>${idx + 1}</sub> = ${stp} = ${yArr[idx]}`
    );
    steps.push(...tempSteps);
    return yArr;
  };
  const inputArr = inputStringArr.map((inputStr) =>
    inputStr.split(" ").map((inn) => Number(inn))
  );
  const bij0 = 1 / (1 + n);
  const bArr =
    bottomUpWeights.trim() === ""
      ? Array(n)
          .fill(0)
          .map(() => Array(m).fill(bij0))
      : bottomUpWeights
          .trim()
          .split("\n")
          .map((row) =>
            row
              .trim()
              .split(" ")
              .map((inn) => Number(inn))
          );
  const tArr =
    topDownWeights.trim() === ""
      ? Array(m)
          .fill(0)
          .map(() => Array(n).fill(1))
      : topDownWeights
          .trim()
          .split("\n")
          .map((row) =>
            row
              .trim()
              .split(" ")
              .map((inn) => Number(inn))
          );
  steps.push(
    `The values assumed in this case are p = ${p}, α=${alpha}. Also, it can be noted that n = ${n} and m = ${m}. Hence,`
  );
  steps.push(
    `Bottom-up-weights, b<sub>ij</sub>(0) = 1/(1+n) = 1/${n + 1} = ${bij0}`
  );
  steps.push(`Top-down-weights t<sub>ji</sub>(0) = 1`);

  for (let inputNo = 0; inputNo < inputArr.length; ++inputNo) {
    // replace 1 with n
    steps.push(
      `For the input vector-${inputNo + 1} [${inputArr[inputNo].join(
        " "
      )}], s = [${inputArr[inputNo].join(" ")}]`
    );
    const snorm = getNorm(inputArr[inputNo]);
    steps.push(
      `Norm of s =  ||s|| = ${inputArr[inputNo].join(
        " + "
      )} = ${snorm}\nCompute activations\nx = [${inputArr[inputNo].join(" ")}]`
    );
    steps.push(
      `Compute net input to each node in the layer:\ny<sub>j</sub> = &sum;<sub>i=1</sub><sup>${n}</sup> b<sub>ij</sub>x<sub>i</sub>\nFor j = 1 to ${m},`
    );

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
