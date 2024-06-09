import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

function ContactPage() {
  return (
    <div>
      <Navbar></Navbar>
      <h1 className=" text-center text-6xl font-bold mt-20">
        Kindly Contact Us
      </h1>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default ContactPage;
