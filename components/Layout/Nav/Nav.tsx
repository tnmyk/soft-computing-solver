import Link from "next/link";
import { Logo, Menu, StyledNav } from "./styled";
import { AiFillGithub } from "react-icons/ai";
const Nav = () => {
  return (
    <StyledNav>
      <Link href="/" passHref>
        <Logo>
          Soft Computing
          <img src="/assets/logo.svg" width="50px" alt="" />
        </Logo>
      </Link>
      <Menu>
        <Link href="/">Home</Link>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/tnmyk/soft-computing-solver"
        >
          Github <AiFillGithub />
        </a>
      </Menu>
    </StyledNav>
  );
};

export default Nav;
