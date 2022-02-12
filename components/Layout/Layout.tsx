import { ReactElement } from "react";
import Nav from "./Nav/Nav";

interface Layout {
  children: ReactElement;
}
const Layout: React.FC<Layout> = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
