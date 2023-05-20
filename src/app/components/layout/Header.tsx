import React from "react";
import logo from "/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "../shared/Wrapper";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-xl bg-white/30">
    <Wrapper>
      <div
        className="
        flex 
        justify-between
        items-center 
        mx-auto 
        py-4">
        {/* logo */}
        <div>
          {/* <h2 className="text-xl font-bold ">Panaverse Dao</h2> */}
          <Image src={logo} alt="logo Panaverse Dao"></Image>
        </div>

        {/* Navigation bar */}
        <ul
          className="
          flex
          space-x-8
          font-medium"
        >
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>Courses</Link>
          </li>
        </ul>
      </div>
    </Wrapper>
    </header>
  );
};

export default Header;
