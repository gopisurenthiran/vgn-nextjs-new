import Breadcumb from "@/components/common/Breadcumb";
import Cta from "@/components/common/Cta";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import About1 from "@/components/about/hero";
import About from "@/components/homes/home-7/About";
import Properties1 from "@/components/properties/Properties1";
import React from "react";
import Category from "@/components/about/category";
import AboutValue from "@/components/about/about-value";
import Vision from "@/components/about/vision";
import Service from "@/components/about/service";
import Banner from "@/components/homes/home-4/Banner";
import Agents from "@/components/about/agents";
import Testimonials  from "@/components/about/testimonial";
import Brands from "@/components/about/brand";


export const metadata = {
  title:
    "Property List Full width || Proty - Real Estate React Nextjs Template",
  description: "Proty - Real Estate React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div id="wrapper">
        <Header1 />
        <About1 />
        <Category/>
        <AboutValue />
        <Vision/>
        <Service  />
        <Banner/>
       <Agents/> 
       <Testimonials/>
       <Brands/>
        {/* <Breadcumb pageName="Property Filter Popup" />
        <div className="main-content">
          <Properties1 defaultGrid />
          <Cta />
        </div> */}
        <Footer1 />
      </div>
    </>
  );
}
