import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IconedInputContainer, Input } from "../components/Input/Input";
import {
  AlgosContainer,
  Description,
  MainHeading,
  StyledHome,
  StyledLink,
  UnitHeading,
} from "../components/styles/styledHome";
import getAlgos from "../lib/getAlgos";

interface Props {
  algos: Array<{
    name: string;
    url: string;
    unit: string;
    id: number;
    rank: number;
  }>;
}

const Home: NextPage<Props> = ({ algos }) => {
  const [searchText, setSearchText] = useState<string>("");
  let prevUnit = "0";
  const search = () => {
    const filtered = algos.filter((algo) =>
      algo.name.toLowerCase().includes(searchText.toLowerCase())
    );

    if (filtered.length === 0)
      return (
        <h3 style={{ margin: "4rem auto" }}>No Algorithm found currently</h3>
      );

    return (
      <AlgosContainer>
        {filtered.map((algo, idx) => {
          const prevUnitInstance = prevUnit;
          prevUnit = algo.unit;

          return (
            <div key={idx}>
              {prevUnitInstance !== algo.unit && (
                <UnitHeading>Unit-{algo.unit}</UnitHeading>
              )}
              <Link href={`/solve/unit-${algo.unit}/${algo.url}`}>
                <StyledLink>
                  {algo.rank}. {algo.name}
                </StyledLink>
              </Link>
            </div>
          );
        })}
      </AlgosContainer>
    );
  };
  return (
    <StyledHome>
      <MainHeading>Soft Computing Solver</MainHeading>
      <Description>Solve Soft Computing problems online </Description>
      <IconedInputContainer style={{ margin: "1rem 0", marginTop: "4rem" }}>
        <Input
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          type="text"
          placeholder="Search algorithm"
          fontSize="1.3rem"
          width="30rem"
        />
        <AiOutlineSearch />
      </IconedInputContainer>

      {search()}
    </StyledHome>
  );
};

export default Home;

export const getStaticProps = () => {
  const algos = getAlgos();
  return {
    props: {
      algos,
    },
  };
};
