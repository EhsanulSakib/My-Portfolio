import About from "@/components/about/About";
import Banner from "@/components/banner/Banner";
import Nav from "@/components/navbar/Navbar";
import Skills from "@/components/skills/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-xl md:text-2xl lg:text-3xl xl:text-4xl bg-[rgb(240,236,229)] text-[#161A30]">
      <div className="w-full 2xl:max-w-[2048px]">
        <div className="fixed w-full 2xl:max-w-[2048px] z-50">
        <Nav></Nav>
        </div>
        <Banner></Banner>
        <About></About>
        <Skills></Skills>
      </div>
    </main>
  );
}
