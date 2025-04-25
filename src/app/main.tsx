import Image from "next/image";
import AnimatedWave from "./animatedwave";

export default function Main() {
  return (
    <div className="w-full h-screen bg-[#031c4d] text-black relative">
      <div className="flex flex-col lg:flex-row justify-around items-center h-5/6 px-4">
        <div className="flex flex-col w-full lg:w-[570px] text-center mb-8 lg:mb-0">
          <h2 className="text-[#0770F9] font-bold text-4xl lg:text-5xl">Aftership</h2>
          <br />
          <p className="text-lg lg:text-xl text-white">
            Beoordeel hier de bedrijven waar jij stage hebt gelopen, zodat
            toekomstige studenten weten welke stages ze beter kunnen vermijden —
            en bij welke bedrijven ze zich juist echt thuis zullen voelen. Samen
            maken we stages beter.
          </p>
        </div>
        <div className="flex flex-col w-full lg:w-[570px] text-center justify-center items-center">
          <h2 className="text-[#0770F9] font-bold text-4xl lg:text-5xl">Can't wait?</h2>
          <p className="text-lg lg:text-xl text-white w-full sm:w-[330px]">
            Kun je niet wachten en wil je meteen beoordeelde bedrijven bekijken
            of zelf een bedrijf toevoegen? Dat kan hier!
          </p>
          <div className="flex flex-row gap-4 sm:gap-6 mt-8 text-white font-bold text-base sm:text-lg">
            <a className="bg-[#0770F9] p-4 sm:p-7 w-28 sm:w-36 rounded-4xl" href="#">
              <button>Beoordeel</button>
            </a>
            <a className="bg-[#0770F9] p-4 sm:p-7 w-28 sm:w-36 rounded-4xl" href="#">
              <button>Voeg toe</button>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <AnimatedWave />
      </div>
    </div>
  );
}