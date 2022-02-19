const algosData = [
  {
    url: "implement-table-using-perceptron",
    name: "Implement table using Perceptron",
    unit: "1",
    id: 1,
    rank: 1,
  },
  {
    url: "classify-2d-input-pattern-using-perceptron",
    name: "Classify 2D input-pattern using Perceptron",
    unit: "1",
    id: 2,
    rank: 2,
  },
  {
    url: "full-cpn",
    name: "Full CPN",
    unit: "3",
    id: 3,
    rank: 3,
  },
];

const getAlgos = () => {
  return algosData.sort((a, b) =>
    a.rank > b.rank ? 1 : b.rank > a.rank ? -1 : 0
  );
};
export default getAlgos;
