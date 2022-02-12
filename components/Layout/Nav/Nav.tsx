import Link from "next/link";
import { Logo, Menu, StyledNav } from "./styled";

const Nav = () => {
  return (
    <StyledNav>
      <Link href="/">
        <Logo>Soft Computing Solver</Logo>
      </Link>
      <Menu>
        <Link href="/">Home</Link>
        <a href="/">Github</a>
      </Menu>
    </StyledNav>
  );
};

export default Nav;
