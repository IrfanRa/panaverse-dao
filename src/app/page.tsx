import CoreTracks from "./components/widgets/CoreTracks";
import Hero from "./components/widgets/Hero"
import SpecializedTracks from "./components/widgets/SpecializedTracks";
import ProgramOutcome from "./components/widgets/ProgramOutcome";
import FooterSection from "./components/widgets/FooterSection";


export default function Home() {
  return (
    <>
      <main>
        {/* Hero Section or Home Page */}
        <Hero></Hero>

        {/* Core Tracks or second page */}
        <CoreTracks/>

        {/* Specialiezed Tracks or third page */}
        <SpecializedTracks/>

        {/* outcome section forth page */}
        <ProgramOutcome/>

        {/* footer section fifth page */}

         {/* footer */}
         <FooterSection/>
        
      </main>
    </>
  );
}
