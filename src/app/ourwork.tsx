import Image from "next/image";

export default function OurWork() {
    return (
        <div className="h-screen">
            <div className="w-full text-center text-blue-500 font-bold text-6xl p-12">
                <h2>AfterShip</h2>
            </div>
            <main className="w-full flex flex-col lg:flex-row justify-around items-center text-black p-6 gap-12">
                <div className="w-full bg-gray-800 lg:w-1/2 flex flex-col items-center justify-center text-center rounded-2xl shadow-2xl hover:scale-[1.01] transition-transform p-8 lg:p-12">
                    <h2 className="text-blue-500 text-4xl lg:text-6xl font-bold">Ons doel</h2>
                    <p className="text-white mt-8 lg:mt-12 w-full lg:w-3/4 text-base lg:text-xl font-bold">
                        Ons doel is om studenten te helpen bij het vinden van een eerlijke
                        en leerzame stageplek. Te vaak belanden studenten bij bedrijven die
                        mooie beloftes maken, maar deze niet waarmaken. Dit kan leiden tot
                        frustratie, gemiste kansen en een negatieve ervaring tijdens een
                        cruciale fase van hun opleiding.
                        <br /><br />
                        Wij willen hier verandering in
                        brengen. Door middel van een platform waar studenten hun
                        stage-ervaringen kunnen delen en bedrijven kunnen beoordelen, bouwen
                        we samen aan een transparant overzicht van betrouwbare
                        stagebedrijven. Zo kunnen toekomstige studenten beter geïnformeerde
                        keuzes maken en krijgen bedrijven die stagiairs goed begeleiden de
                        erkenning die ze verdienen.
                        <br /><br />
                        Samen zorgen we ervoor dat iedere
                        student een stage krijgt die écht bijdraagt aan hun ontwikkeling.
                    </p>
                </div>

                <div className="w-full lg:w-auto flex flex-col items-center border border-gray-700 rounded-2xl shadow-2xl hover:scale-[1.01] transition-transform bg-gray-800 p-4">
                    <Image
                        src="/green-swirly.png"
                        alt="Image"
                        width={400}
                        height={400}
                        className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-[500px]" />
                    <Image
                        src="/stock-talking.png"
                        alt="Image"
                        width={400}
                        height={400}
                        className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-[500px] mt-4" />
                </div>
            </main>
            </div>
    );
}