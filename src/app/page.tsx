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
          className="rounded-full"
        />
        <div className="w-full flex justify-evenly">
        <a href="">one</a>
        <a href="">two</a>
        <a href="">three</a>
        </div>
      </nav>
    </div>
  );
}
