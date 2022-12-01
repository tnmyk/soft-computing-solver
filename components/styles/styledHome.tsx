import styled from "styled-components";

export const StyledHome = styled.div`
  padding-top: 5rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen  and (max-width: 700px){
    padding-top: 2.5rem;
  }
`;

export const MainHeading = styled.h1`
  font-size: 3.8rem;
  text-align: center;

  @media only screen  and (max-width: 700px){
    font-size: 2.5rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  margin-top: 0.5rem;
  text-align: center;

  @media only screen  and (max-width: 700px){
    font-size: 1rem;
  }
`;

export const StyledLink = styled.a`
  color: #99dbff;
  font-size: 1.1rem;
  display: inline-flex;
  margin-bottom: 0.6rem;
  cursor: pointer;
  text-decoration: none;
`;

export const AlgosContainer = styled.div`
  width: 60%;
  margin-top: 2.7rem;

  @media only screen and (max-width: 1000px){
    width: 80%;
  }

  @media only screen and (max-width: 500px){
    width: 95%;
  }
  
`;

export const UnitHeading = styled.h4`
  margin-top: 0.6rem;
  margin-bottom: 0.5rem;
`;
