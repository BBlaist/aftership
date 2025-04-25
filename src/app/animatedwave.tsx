import Image from "next/image";

export default function AnimatedWave() {
    return (
        <div className="relative w-full overflow-hidden bg-[#031c4d] h-auto">
            {/* Ship */}
            <div className="absolute left-1/4 sm:left-1/3 lg:left-1/4 top-[120px] sm:top-[120px] lg:top-[60px] animate-ship">
                <img
                    src="/aftership-logo2.png"
                    alt="Ship"
                    className="w-[150px] sm:w-[180px] lg:w-[300px]"
                />
            </div>

            {/* Waves */}
            <img
                src="/Group 9 (2).svg"
                alt="Wave"
                className="w-full h-auto"
            />
        </div>
    );
}