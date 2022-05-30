const algosData = [
  {
    name: "Implement table using Perceptron",
    unit: "1",
    id: 1,
    rank: 1,
  },
  {
    name: "Classify 2D input-pattern using Perceptron",
    unit: "1",
    id: 2,
    rank: 2,
  },
  {
    name: "Full CPN",
    unit: "3",
    id: 3,
    rank: 3,
  },
  {
    name: "Forward CPN",
    unit: "3",
    id: 4,
    rank: 4,
  },
  {
    name: "Construct ART 1 network for clustering input vectors",
    unit: "3",
    id: 5,
    rank: 5,
  },
];

const getAlgos = () => {
  return algosData.sort((a, b) =>
    a.rank > b.rank ? 1 : b.rank > a.rank ? -1 : 0
  );
};
export default getAlgos;
