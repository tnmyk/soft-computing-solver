const algosData = [
  {
    url: "implement-table-using-perceptron",
    name: "Implement table using Perceptron",
    unit: "1",
    id: 1,
  },
  {
    url: "classify-2d-input-pattern-using-perceptron",
    name: "Classify 2D input-pattern using Perceptron",
    unit: "1",
    id: 2,
  },
  {
    url: "full-cpn",
    name: "Full CPN",
    unit: "3",
    id: 3,
  },
];

const getAlgos = () => {
  return algosData.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));
};
export default getAlgos;
