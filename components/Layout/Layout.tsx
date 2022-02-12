import { ReactElement } from "react";
import Nav from "./Nav/Nav";

interface Layout {
  children: ReactElement;
}
const Layout: React.FC<Layout> = ({ children }) => {
  return (
    <div>
      <Nav />
      <main style={{ padding: "2rem 8%" }}>{children}</main>
    </div>
  );
};

export default Layout;
