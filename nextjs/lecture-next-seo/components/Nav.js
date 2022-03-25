import React from "react";
import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <ul className={navStyles.navigation}>
      <li>
        <Link href="/">home</Link>
      </li>
      <li>
        <Link href="/photos">photos</Link>
      </li>
      <li>
        <Link href="/pictures">pictures</Link>
      </li>
      <li>
        <Link href="/albums">albums</Link>
      </li>
    </ul>
  );
};

export default Nav;
