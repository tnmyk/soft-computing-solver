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
    let winningIndex!: number;
    let xnorm = -1;
    let x!: number[];
    while (xnorm / snorm < p) {
      winningIndex = yArr.indexOf(Math.max(...yArr)) + 1;
      steps.push(`Winning Index = J = ${winningIndex}`);
      yArr[winningIndex - 1] = -1;

      steps.push(
        `x<sub>i</sub> = s<sub>i</sub>t<sub>Ji</sub>\nx1 = [${inputArr[
          inputNo
        ].join(" ")}][${tArr[winningIndex - 1].join(" ")}]`
      );
      x = inputArr[inputNo].map(
        (_, idx) => inputArr[inputNo][idx] * tArr[winningIndex - 1][idx]
      );
      xnorm = getNorm(x);
      const reset: number = xnorm / snorm;
      steps.push(
        `x = [${x.join(
          " "
        )}]\nNorm of x = ||x|| = ${xnorm}\n Test for reset condition:\n\t ||x||/||s|| = ${xnorm}/${snorm} = ${reset}` +
          (reset > p
            ? ` >= ${p} (p)\n Hence, reset condition is false.`
            : ` < ${p} (p)\n Hence, reset condition is true. Recomputing winning Index`)
      );
    }
    steps.push(
      `Update bottom-up weights for α = ${alpha}:\n b<sub>iJ(new)</sub> = (αx<sub>i</sub>)/(α - 1 + ||x||) = (${alpha}x<sub>i</sub>)/(${
        alpha - 1
      } + ||x||)`
    );
    for (let i = 0; i < bArr.length; ++i) {
      bArr[i][winningIndex - 1] = (alpha * x[i]) / (alpha - 1 + xnorm);
      steps.push(
        `b${i + 1}${winningIndex} = ${alpha * x[i]}/ ${alpha - 1 + xnorm} = ${
          bArr[i][winningIndex - 1]
        }`
      );
    }
    steps.push(
      `Therefore, the bottom-up weights become:\n b<sub>iJ</sub> = [${bArr.join(
        " , "
      )}]`
    );
    tArr[winningIndex - 1] = x;
    steps.push(
      `The top-down weights become:\n t<sub>Ji</sub> = [${tArr.join(" , ")}]`
    );
  }
  return steps.join(`\n`);
};

export default solve;
