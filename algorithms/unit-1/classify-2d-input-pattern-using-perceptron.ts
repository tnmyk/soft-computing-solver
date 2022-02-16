const Solve = (
  arrayOfInputs: string[],
  numberOfPatterns: number,
  numberOfXInputs: number,
  alpha: number
) => {
  let b = 0;
  const table = [];
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
  const steps: Array<string> = [];

  for (let i = 0; i < numberOfPatterns; ++i) {
    const yin = getYin(arrX[i], b, arrW);
    const y = getY(yin);
    steps.push(`<h2><u>Step - ${i + 1}</u></h2>\n`);
    steps[i] += `For input sample ${i + 1}, x = [${arrX[i].join(" ")}], t = ${
      arrT[i]
    }, net input is calculated as\nyin ${getYinSteps(
      arrX[i],
      b,
      arrW
    )} yin = ${yin} \n
      Using activation function, y = f(yin) = ${y} \n\n`;
    if (y != arrT[i]) {
      steps[
        i
      ] += `Now since t != y, the new weights are computed as \n wi(new) = wi(old) + αt(xi)\n`;
      arrW = arrW.map((w, idx) => {
        const newWeight = w + alpha * arrT[i] * arrX[i][idx];
        steps[i] += `w${idx + 1} (new) = w${idx + 1} (old) + αtx${
          idx + 1
        } = ${w} + (${alpha})(${arrT[i]})(${arrX[i][idx]}) = ${newWeight}\n`;
        return newWeight;
      });
      const oldb = b;
      b += alpha * arrT[i];
      steps[
        i
      ] += `b(new) = b(old) + αt = ${oldb} + (${alpha})(${arrT[i]}) = ${b} \n\n`;
      steps[i] += `The weights after presenting input sample - ${
        i + 1
      } are \n w= [${arrW.join(" ")}]\n\n`;
    } else {
      steps[i] += `For input sample - ${i + 1} t == Y`;
      break;
    }
    table.push([...arrW, b]);
  }
  return { table, steps };
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

const getYinSteps = (X: number[], b: number, arrW: number[]) => {
  let step = `= b `;
  for (let i = 1; i <= X.length; ++i) {
    step += `+ x${i}*w${i} `;
  }
  step += `\n = ${b}`;
  for (let i = 0; i < X.length; ++i) {
    step += `+ (${X[i]})*(${arrW[i]})`;
  }
  step += "\n";
  return step;
};
