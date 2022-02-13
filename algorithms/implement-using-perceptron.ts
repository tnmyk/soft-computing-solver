const Solve = (
  arrayOfInputs: String[],
  numberOfInputs: number,
  b: number,
  alpha: number
) => {
  const arrX: Array<Array<number>> = [];
  const arrT: Array<number> = [];
  let ans: Array<Array<number>> = [];
  let arrW: Array<number> = Array.apply(null, Array(numberOfInputs)).map(
    function () {
      return 0;
    }
  );
  arrayOfInputs.forEach((input) => {
    const temp: Array<number> = input.split(" ").map((x) => Number(x));
    if (temp.length !== numberOfInputs + 1) {
      throw new Error("Incomplete inputs");
    }
    arrX.push(temp.slice(0, -1));
    arrT.push(temp.at(-1)!);
  });
  for (let j: number = 0; j < 10; ++j) {
    const idx = j % Math.pow(2, numberOfInputs);
    const X = arrX[idx];
    const yin = getYin(X, b, arrW);
    const y = getY(yin);
    ans.push([]);
    ans[j].push(...X, 1, arrT[idx], yin, y);
    if (y !== arrT[idx]) {
      // console.log(X, " : ", y, " != ", arrT[idx]);
      // console.log("X: ", X, "ArrT: ", arrT, " Arrw", arrW);
      arrW = arrW.map((w, widx) => {
        const deltaW = alpha * arrT[idx] * X[widx];
        ans[j].push(deltaW);
        return w + deltaW;
      });
      const deltaB = alpha * arrT[idx];
      b += deltaB;
      ans[j].push(deltaB);
    } else {
      ans[j].push(
        ...Array.apply(null, Array(numberOfInputs + 1)).map(function () {
          return 0;
        })
      );

      // console.log("W: ", arrW);
      // console.log("b: ", b);
      // break;
    }
    ans[j].push(...arrW, b);
  }
  return ans;
};
export default Solve;

const getY = (yin: number) => {
  if (yin > 0) {
    return 1;
  } else if (yin < 0) {
    return -1;
  }
  return 0;
};

const getYin = (X: number[], b: number, arrW: number[]) => {
  return (
    b +
    X.reduce((prev, current, index) => {
      return prev + current * arrW[index];
    }, 0)
  );
};
