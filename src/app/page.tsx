import Image from "next/image";

export default function Home() {
  return (
    <div className="p-0 m-0">
      <nav className="bg-green-700 w-screen h-24 flex items-center p-4 text-gray-200">
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

      <main className="h-full w-full flex justify-around text-black pt-24">
        <div className="w-1/2">
          <h2 className="text-blue-500 text-6xl font-bold">Our goal</h2>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            tempore tempora, expedita totam animi qui, magnam fugit officiis ut
            corrupti, ad deleniti eveniet. Maiores officiis soluta veritatis
            veniam nam aliquid autem reiciendis! Dolores nisi dolorem incidunt
            voluptatibus totam doloremque quod quo voluptates sint, laboriosam
            veritatis consectetur eos inventore dolor vel beatae. Laudantium
            maiores deleniti doloribus illum fuga, incidunt dolore
            necessitatibus!
          </p>
        </div>
        <div className="border border-gray-300 rounded-2xl shadow-2xl hover:scale-101">
          <Image
            src="/green-swirly.png"
            alt="Image"
            width={500}
            height={500}
          />
          <Image
            src="/stock-talking.png"
            alt="Image"
            width={500}
            height={500}
            
            />
        </div>
      </main>
    </div>
  );
}
