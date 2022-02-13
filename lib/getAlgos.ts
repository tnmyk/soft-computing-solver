const algosData = [
  {
    url: "implement-using-perceptron",
    name: "Implement using perceptron",
    unit: "1",
    id: 1,
  },
];

const getAlgos = () => {
  return algosData.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));
};
export default getAlgos;
