import React from "react";
import Image from "next/image";
import Link from "next/link";
import aboutpic from "../../../public/assests/pics/WhatsApp Image 2024-04-29 at 21.37.45_ccbdeb0d.jpg"

const About = () => {
  return (
    <div id="about" style={{ backgroundColor: "RGB(245, 245, 245)" }}>
      <hr className="border-black border-2 " />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 ml-4 md:mb-0">
            <Image
              className="object-cover object-center  rounded-full  w-[25rem] h-[30rem]  "
              quality={100}   
              alt="hero"
              src={aboutpic}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center  text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            <p className="mb-8 leading-relaxed font-semibold">
            I'm a GIAIC student who is passionate about creating dynamic, approachable websites and applications. I appreciate solving problems, learning new technologies, and constantly honing my coding abilities to stay up to date with industry trends. I have a solid foundation in front-end technologies including HTML, CSS, JavaScript, and frameworks like React.

            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;