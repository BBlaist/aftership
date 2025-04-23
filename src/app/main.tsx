import Image from "next/image";
import AnimatedWave from "./animatedwave";

export default function Main() {
  return (
    <div className="w-full h-screen bg-white text-black relative">
      <div className="flex flex-row justify-around items-center h-3/4">
        <div>
            <h2>Aftership</h2>
        </div>
        <div>
            <h2>Can't wait?</h2>
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <AnimatedWave />
      </div>
    </div>
  );
}