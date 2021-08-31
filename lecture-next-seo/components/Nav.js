import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <ul>
      <li>
        <Link href="/">home</Link>
      </li>
      <li>
        <Link href="/photos">photos</Link>
      </li>
    </ul>
  );
};

export default Nav;
