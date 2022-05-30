import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 1.5rem 3%;
  width: 75%;
  margin: 0 auto;
  /* padding-top: 2.1rem; */
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  border-top: 1px solid #4d4d4d;
  a {
    color: inherit;
    font-weight: 600;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        Built by{" "}
        <a target="_blank" rel="noreferrer" href="https://github.com/tnmyk">
          tnmyk
        </a>
      </div>
      <div></div>
    </StyledFooter>
  );
};

export default Footer;
