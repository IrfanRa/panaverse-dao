import React from 'react'
import Image from 'next/image'
import panlogo from "../assets/images/panaverse-logo.webp"

const FooterSection = () => {
  return (
    
    <footer className=" border-t border-slate-200  ">
        <div className=" px-4 py-10 grid grid-cols-3">

             {/* left content */}
        <div className='ml-10'>
            <Image src={panlogo} alt='panaverse logo' className={"h-1/1 w-1/2 object-cover"}/>
            <p className="mt-6 text-gray-800">Certified Web 3.0 and Metaverse Developer A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</p>
        </div>

        {/* Center content */}
        <div className='m-14'>
        <h2 className="text-4xl font-bold whitespace-pre-line">
            Programs
          </h2>
          <h1 className="text-lg mt-6 text-gray-800">Artificial Intelligence</h1>
          <h1 className="text-lg mt-2 text-gray-800">Web 3.0 and Metaverse Developer</h1>
          <h1 className="text-lg mt-2 text-gray-800">Cloud-Native Computing</h1>
          <h1 className="text-lg mt-2 text-gray-800">Genomics and Bioinformatics</h1>
        </div>
        {/* Right content */}
        <div className='m-14'>
        <h2 className="text-4xl font-bold whitespace-pre-line">
            Usefull Links
          </h2>
        </div>
        </div>

        <div className='place-items-center text-center'> 
        <p className="bg-slate-300 text-xl">&copy; {new Date().getFullYear()} IRFAN RASHEED. Student Of PIAIC. All rights reserved.
        </p>
        </div>
        
       
    </footer>
  )
}

export default FooterSection