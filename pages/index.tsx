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
} from "../components/styles/styledHome";
import getAlgos from "../lib/getAlgos";

interface Props {
  algos: Array<{
    name: string;
    url: string;
    unit: string;
    id: number;
  }>;
}

const Home: NextPage<Props> = ({ algos }) => {
  const [searchText, setSearchText] = useState<string>("");
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

      <AlgosContainer>
        {algos
          .filter((algo) => algo.name.includes(searchText))
          .map((algo, idx) => {
            return (
              <div key={idx}>
                <Link href={`/solve/${algo.url}`}>
                  <StyledLink>
                    {algo.id}. {algo.name}
                  </StyledLink>
                </Link>
              </div>
            );
          })}
      </AlgosContainer>
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
