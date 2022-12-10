import React, { FC } from "react";
import classes from "./base_layout.module.scss";
import Header from "./header";
import Footer from "./footer";

interface BaseLayout {
  children: React.ReactNode;
}

const BaseLayout: FC<BaseLayout> = ({ children }) => {
  return (
    <>
      <div className={`${classes.header_heat} `}>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </>
  );
};

export default BaseLayout;
