import type { NextPage } from "next";
import { Input } from "../components/Input/Input";
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
    </StyledHome>
  );
};

export default Home;
