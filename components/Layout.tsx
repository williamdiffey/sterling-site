import * as React from "react";
import { NavBar } from "./Nav";

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({ children }) => (
  <div>
    <link
      href={`https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap`}
      rel="stylesheet"
    ></link>
    {/* <NavBar /> */}
    {children}
  </div>
);

export default Layout;
