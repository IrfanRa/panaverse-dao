import Wrapper from "../shared/Wrapper"
import Image from "next/image";
import HeroPoster from "../assets/images/hero-poster.png"
import Button from "../shared/Button";
const Hero = () => {
  return (
  <section >
    <Wrapper>
      <div className="flex flex-col md:flex-row items-center">
        {/* left side for content */}
        <div  className="flex-1">
          <h4 className="text-teal-700 font-semibold text-lg mt-4">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
          <h1 className="text-5xl sm:text-6xl font-bold  ">Certified Web 3.0 and Metaverse Developer</h1>
          <p className="mt-6 text-xl text-slate-600 max-w-xl h-16">A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</p>
          <p  className="mt-2 text-xl text-slate-600 max-w-xl h-16">Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies</p>
          
          <div className="mt-10">
            <Button text="Enroll Now"/>
          </div>

        </div>

        {/* right side for image*/}
        <div className="flex-1">
          <Image src={HeroPoster} alt="Hero Poster" />
        </div>


      </div>
    </Wrapper>
  </section>
  )
}

export default Hero
