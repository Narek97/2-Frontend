import React from "react";
import classes from "./Button.module.css";
import Link from "next/link";

const Button = ({ children, onClick, link }) => {
  return (
    <>
      {link ? (
        <Link href={link}>
          <a className={classes.btn}>{children}</a>
        </Link>
      ) : (
        <button onClick={onClick} className={classes.btn}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
