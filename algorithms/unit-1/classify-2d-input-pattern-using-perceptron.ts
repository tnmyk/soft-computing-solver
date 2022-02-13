const Solve = (
  arrayOfInputs: string[],
  numberOfPatterns: number,
  numberOfXInputs: number,
  alpha: number
) => {
  let b = 0;

  const arrX: Array<Array<number>> = [];
  const arrT: Array<number> = [];
  let arrW = Array.apply(null, Array(numberOfXInputs)).map(function () {
    return 0;
  });

  arrayOfInputs.forEach((input) => {
    const tempArr: Array<number> = input.split(" ").map((_x) => Number(_x));
    if (tempArr.length !== numberOfXInputs + 2) {
      throw new Error("Please enter all inputs carefully");
    }
    arrX.push(tempArr.slice(0, -2));
    arrT.push(tempArr.at(-1)!);
  });

  for (let i = 0; i < numberOfPatterns; ++i) {
    if (getY(getYin(arrX[i], b, arrW)) != arrT[i]) {
      arrW = arrW.map((w, idx) => {
        return w + alpha * arrT[i] * arrX[i][idx];
      });
      b += alpha * arrT[i];
    } else {
      console.log("Y == t");
    }
    console.log("W:", arrW);
  }
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
