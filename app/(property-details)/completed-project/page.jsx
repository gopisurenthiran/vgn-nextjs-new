import Cta from "@/components/common/Cta";

import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import FilterTop1 from "@/components/properties/FilterTop1";
import Properties10 from "@/components/properties/Properties10";

import React from "react";

export const metadata = {
  title:
    "Property List Top Search || Proty - Real Estate React Nextjs Template",
  description: "Proty - Real Estate React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div id="wrapper">
        <Header1 />
        <FilterTop1 />
        <div className="main-content">
          <Properties10 defaultGrid />
          <Cta />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
