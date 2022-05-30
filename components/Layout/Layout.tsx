import { ReactElement } from "react";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";

interface Layout {
  children: ReactElement;
}
const Layout: React.FC<Layout> = ({ children }) => {
  return (
    <div>
      <Nav />
      <main style={{ padding: "2rem 8%", minHeight: "75vh" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
