"use client";
import React from "react";
;
import Image from "next/image";
import Link from "next/link";
import { IoMdDownload } from "react-icons/io";
import heropic from "../../../public/assests/pics/profile pic.jpg";

const Hero: React.FC = () => {
    return (
      <div style={{ backgroundColor: "RGB(241, 241, 241)" }}>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image
                className="object-cover object-center mx-auto w-[20rem] h-[30px] rounded-full"
                alt="pic"
                width={300}
                height={300}
                src={heropic}
                quality={100}
                layout="intrinsic"
                objectFit="cover"
              />
            </div>
            <div
              className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left 
            mb-6 mt-10 md:mb-0 md:mt-8 items-center text-center"
            >
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                I am Front-end Developer
                <br className="hidden lg:inline-block" />

              </h1>
  
              <p className="mb-8 leading-relaxed">
                I&apos;m a web designer and developer with a passion for creating
                visually stunning, high-performing websites. I combine modern
                design with expert development to deliver seamless, responsive
                sites. Whether you need a fresh design or a custom solution, I&apos;ll
                help bring your vision to life with creativity and technical
                precision.
              </p>
              <div className="flex justify-center">
                <Link href={"#Contact"}>
                  <button className="inline-flex text-white bg-teal-500 border-0 py-[7px] px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                    Contact
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Hero;
