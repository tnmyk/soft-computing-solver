import type { NextPage } from "next";
import Head from "next/head";
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
        <>
          <h4
            style={{
              margin: "3rem auto 0.5rem auto",
              width: "max-content",
              fontWeight: "500",
            }}
          >
            No Algorithm match found.
          </h4>
          <h4 style={{ fontWeight: "500" }}>
            Contribute on{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/tnmyk/soft-computing-solver"
            >
              Github
            </a>
            💙
          </h4>
        </>
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
              <Link
                href={`/solve/unit-${algo.unit}/${algo.name
                  .toLowerCase()
                  .split(" ")
                  .join("-")}`}
              >
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
      <Head>
        <title>Soft Computing step-by-step online solver</title>
        <meta
          name="description"
          content={`Soft Computing step-by-step online solver`}
        ></meta>
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={`Soft Computing - step-by-step online solver`}
        />
        <meta
          property="og:description"
          content={`Soft Computing - step-by-step online solver`}
        />
      </Head>
      <MainHeading>Soft Computing Solver</MainHeading>
      <Description>
        Step-by-step solutions for learning and online exams
      </Description>
      <IconedInputContainer style={{ margin: "1rem 0", marginTop: "2rem" }}>
        <Input
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          type="text"
          placeholder="Search algorithms"
          fontSize="1.1rem"
          width="32rem"
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
