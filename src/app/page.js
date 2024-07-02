import Banner from "@/components/banner/Banner";
import Nav from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-xl md:text-2xl lg:text-3xl xl:text-4xl bg-[rgb(240,236,229)]">
      <div className="w-full 2xl:max-w-[2048px]">
        <Nav></Nav>
        <Banner></Banner>
      </div>
    </main>
  );
}
