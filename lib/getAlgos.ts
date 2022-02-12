const algosData = [
  {
    url: "implement-using-perceptron",
    name: "Implement using perceptron",
    unit: "1",
  },
  {
    url: "implement-using-sss",
    name: "Implement usingsss",
    unit: "12",
  },
  {
    url: "implement-using-sss",
    name: "Implement usingsss12",
    unit: "13",
  },
];

const getAlgos = () => {
  return algosData.sort((a, b) =>
    a.unit > b.unit ? 1 : b.unit > a.unit ? -1 : 0
  );
};
export default getAlgos;
