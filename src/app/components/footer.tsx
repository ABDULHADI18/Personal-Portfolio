import React from "react";
import Image from "next/image";

import footlogo from "../../../public/assests/pics/logo.jpg";

const Footer = () => {
  return (
    <div>
      <footer
        className=" body-font"
        style={{ backgroundColor: "teal" }}
      >
        <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-black">
            <Image
              src={footlogo}
              width={100}
              height={100}
              alt="abdul hadi"
              className="h-17 w-16 mix-blend-color-burn"
            />
            <span className="ml-3 text-xl">Abdul Hadi</span>
          </a>
          <p className="text-base text-black sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-black sm:py-2 sm:mt-0 mt-4">
            © 2024 Abdul Hadi
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"></span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
