"use client";
import Image from "next/image";
import ModalVideo from "@/components/common/ModalVideo";
import { useState } from "react";
export default function VideoReview() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12">
        {/* <div className="wg-title text-11 fw-6 text-color-heading">Video</div> */}
        <div className="widget-video style-1">
        <Image
          className="lazyload"
          data-src="/images/section/property-detail.jpg"
          alt=""
          src="/images/banner/property-detail.webp"
          width={792}
          height={446}
        />
        <a onClick={() => setIsOpen(true)} className="popup-youtube">
          <i className="icon-play" />
        </a>
      </div>
      
      <ModalVideo
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        videoId={"XHOmBV4js_E"}
      />
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
          {/* <h5>Experience
            Future-Ready
            Living:</h5> */}
            <p className="text-1 split-text split-lines-transform" style={{marginTop: "100px"}}>Step into the future of urban living with VGN's groundbreaking development projects. In this immersive 3D visualization, witness the meticulous planning and innovative infrastructure systems integrated into VGN's residential plots.</p>
            <p className="text-1 split-text split-lines-transform">From underground electrical trench systems to metro water lines, sewage systems, stormwater drain systems, and piped natural gas provisions, VGN is redefining the standard of modern living. Our commitment to sustainability, efficiency, and convenience shines through in every aspect of our developments.</p>
      </div>
    </div>
    </div>
   
    </>
      
  );
}
