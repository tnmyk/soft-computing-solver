import styled from "styled-components";

export const StyledNav = styled.nav`
  padding: 1.5rem 8%;
  padding-top: 2.1rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  a {
    color: inherit;
    text-decoration: none;
    font-weight: 600;
  }
`;

export const Logo = styled.a`
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  img{
    margin-left: 0.2rem;
  }
`;

export const Menu = styled.div`
  display: flex;
  column-gap: 2.5rem;
  a {
    display: flex;
    align-items: center;
    column-gap: 0.3rem;
  }
  a svg {
    font-size: 1.3rem;
  }
`;
