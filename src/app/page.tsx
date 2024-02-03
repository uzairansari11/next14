import { navLink } from "@/utils/navlink";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div>hello</div>
      {navLink.map((link) => {
        return (
          <Link href={link.path} key={link.path}>
            {" "}
            {link.name}
          </Link>
        );
      })}
    </>
  );
};

export default page;
