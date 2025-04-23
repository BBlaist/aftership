import Image from "next/image";
import Nav from "./nav";
import OurWork from "./ourwork";
import Main from "./main";

export default function Home() {
  return (
    <div className="p-0 m-0">
    <Nav />
 
    <Main />

    <OurWork />

    </div>
  );
}
