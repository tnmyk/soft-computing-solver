import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IconedInputContainer, SearchInput } from "../components/Input/Input";
import {
  Description,
  MainHeading,
  StyledHome,
} from "../components/styles/styledHome";
import getAlgos from "../lib/getAlgos";

interface Props {
  algos: Array<string>;
}

const Home: NextPage<Props> = ({ algos }) => {
  const [searchText, setSearchText] = useState<string>("");
  return (
    <StyledHome>
      <MainHeading>Soft Computing Solver</MainHeading>
      <Description>Solve Soft Computing problems online </Description>
      <IconedInputContainer style={{ margin: "1rem 0", marginTop: "4rem" }}>
        <SearchInput
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          type="text"
          placeholder="Search algorithm"
          fontSize="1.3rem"
        />
        <AiOutlineSearch />
      </IconedInputContainer>

      <div>
        {algos.map((algo) => {
          return <Link href={`/solve/${algo}`}>{algo}</Link>;
        })}
      </div>
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
