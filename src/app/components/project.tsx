import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import img1   from "../../../public/assests//projects/project-1.png"
import img2  from "../../../public/assests//projects/project-2.png"
import img3  from "../../../public/assests//projects/Screenshot (48).png"
const Project = () => {
  return (
    <div id='project'  style={{ backgroundColor:"RGB(244, 244, 244)" }}>
       <hr className="border-black border-2 "  />
        <section className="text-gray-600 body-font">
    <div className="container px-5 py-16 mx-auto" >
      <div
        className="flex flex-col text-center w-full mb-20"
      
      >
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          My  Projects
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        View my most recent work, which highlight my abilities in design, animation, and web programming. Every project showcases a distinct set of technology and functionalities.
        </p>
      </div>
      <div className="flex flex-wrap -m-4" >
        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer "  >
          <div className="flex relative" >
            <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
          src={img1}
            />
            <div
              className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
         
            >
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                Dynamic Resume Builder
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Resume Builder
              </h1>
              <p className="leading-relaxed line-clamp-3">     
              Create a professional resume in minutes with our dynamic resume builder.
              </p>
               <Link   target='_blank'            
                href={'https://milestone-3-mu-azure.vercel.app/'} >
               <p className='leading-relaxed  text-indigo-500 hover:underline '> View Project</p>
               </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer "  >
          <div className="flex relative" >
            <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={img2}
              />
            <div
              className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
         
            >
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                Website
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Ecommerce Website
              </h1>
              <p className="leading-relaxed line-clamp-3">     
              Products are displayed on an eCommerce website with features including category product descriptions and a responsive design for convenient browsing.
              </p>
               <Link   target='_blank'            
                href={'https://github.com/ABDULHADI18/Web_page'} >
               <p className='leading-relaxed  text-indigo-500 hover:underline '> View Project</p>
               </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer "  >
          <div className="flex relative" >
            <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={img3}
            />
            <div
              className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
         
            >
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
               Editable Resume Builder
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Resume builder
              </h1>
              <p className="leading-relaxed line-clamp-3">     
              Effortlessly design your perfect resume with our editable resume builder
              </p>
               <Link   target='_blank'            
                href={'https://milestone-4-sooty.vercel.app/'} >
               <p className='leading-relaxed  text-indigo-500 hover:underline '> View Project</p>
               </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Project