import Image from "next/image";

export default function AnimatedWave() {
    return (
        <div className="relative w-full overflow-hidden bg-white h-auto">
            {/* Ship */}
            <div className="absolute left-1/4 sm:left-1/3 lg:left-1/4 top-[120px] sm:top-[120px] lg:top-[160px] animate-ship">
                <img
                    src="/freighter.png"
                    alt="Ship"
                    className="w-[150px] sm:w-[180px] lg:w-[200px]"
                />
            </div>

            {/* Waves */}
            <img
                src="/Group 9.svg"
                alt="Wave"
                className="w-full h-auto"
            />
        </div>
    );
}