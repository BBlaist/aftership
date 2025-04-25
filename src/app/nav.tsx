import Image from "next/image";

export default function Nav() {
  return (
    <nav className="w-full h-24 flex items-center p-4 text-gray-200 absolute top-0 left-0 z-10">
        <Image
          src="/aftership-logo2.png"
          alt="Logo"
          width={100}
          height={100}
          className=""
        />
        <div className="w-full flex justify-evenly text-[28px] font-bold">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
      </nav>
  );
}
