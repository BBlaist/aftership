import Image from "next/image";

export default function Home() {
  return (
    <div className="p-0 m-0">
      <nav className="bg-gray-700 w-screen h-24 flex items-center p-4"> 
        <Image 
          src="/aftership-logo2.png"
          alt="Logo"
          width={100}
          height={100}
          className=""
        />
        <div className="w-full flex justify-evenly text-2xl font-bold">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        </div>
      </nav>
    </div>
  );
}
