import { ReactChildren, ReactElement } from "react";

interface Layout {
  children: ReactElement;
}
const Layout: React.FC<Layout> = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
