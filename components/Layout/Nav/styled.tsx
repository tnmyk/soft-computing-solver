import styled from "styled-components";

export const StyledNav = styled.nav`
  padding: 1.5rem 8%;
  padding-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  a {
    color: inherit;
    text-decoration: none;
    font-weight: 600;
  }
`;

export const Logo = styled.a`
  font-weight: 600;
  font-size: 1.4rem;
`;

export const Menu = styled.div`
  display: flex;
  column-gap: 3.5rem;
`;
