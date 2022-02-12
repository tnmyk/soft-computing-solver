const algosData = [
  {
    url: "implement-using-perceptron",
    name: "Implement using perceptron",
    unit: "1",
  },
];

const getAlgos = () => {
  return algosData.sort((a, b) =>
    a.unit > b.unit ? 1 : b.unit > a.unit ? -1 : 0
  );
};
export default getAlgos;
