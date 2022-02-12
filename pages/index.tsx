import type { NextPage } from "next";
import { Input, SearchInput } from "../components/Input/Input";
import {
  Description,
  MainHeading,
  StyledHome,
} from "../components/styles/styledHome";

const Home: NextPage = () => {
  return (
    <StyledHome>
      <MainHeading>Soft Computing Solver</MainHeading>
      <Description>Solve Soft Computing problems online </Description>
      <SearchInput
        type="text"
        placeholder="Search algorithm"
        fontSize="1.3rem"
      ></SearchInput>
    </StyledHome>
  );
};

export default Home;
