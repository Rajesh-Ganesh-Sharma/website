import Link from "next/link";
import Navbar from "@/components/Navbar";
import Info from "@/components/Info";
import Gallery from "@/components/Gallery";
import NewGallery from "@/components/NewGallery";

import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Navbar></Navbar>
      <Info></Info>
      <NewGallery></NewGallery>
      {/* <Gallery></Gallery> */}
      <Resume></Resume>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
{
  /*
->Correct Navbar
  -> add Links for seperate page
->Correct Gallery
  -> Style View more Button
-> Check Responsivenesss


After Deploy
->Optimize Images

*/
}
