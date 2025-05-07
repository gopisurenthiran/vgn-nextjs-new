"use client";
import React from "react";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { agents3 } from "@/data/agents";
import { Swiper, SwiperSlide } from "swiper/react";

export default function About() {
  return (
    <div className="tf-container-2">
      <div className="row">
        <div className="col-12">
          <div className="text-with-img style-1 tf-spacing-1">
            <div className="left">
              <div className="heading-section mb-54 gap-33">
                <h2 className="title fw-5 split-text split-lines-transform">
                 About Us
                </h2>
                <p
                  className="text-1 text-color-default wow animate__fadeInUp animate__animated"
                  data-wow-duration="1.5s"
                  data-wow-delay="0s"
                >
                 Founded in 1942, VGN is a leader, visionary and a pioneer in the real estate business and stands out distinctly among its competitors. Headquartered in Chennai, we are one of the oldest and most trusted real estate companies, certified by ISO 14001:2004. Years of experience helped us create our own path by understanding our customer’s desires and helped us improve their quality of life by providing them with the best projects. And this has helped us become a brand that customers deeply trust.
                </p>
                <p
                  className="text-1 text-color-default wow animate__fadeInUp animate__animated"
                  data-wow-duration="1.5s"
                  data-wow-delay="0s"
                >
                 We always believed in going the extra mile for our customers. That’s why just ordinary plotted developments weren’t enough. Every idea, every unique feature, and our passion reflected in our projects, and our customer family grew rapidly, making us a trustworthy brand.
                </p>
                <p
                  className="text-1 text-color-default wow animate__fadeInUp animate__animated"
                  data-wow-duration="1.5s"
                  data-wow-delay="0s"
                >
                 Our projects are spread across the city with plenty of happy families and investors reaping from their investments. Residential, commercial, retail and plots, we develop and transform land of every kind. With our expertise in consumer behavior, we have offered plots with unmatched quality, right from affordable to ultra-luxury.
                </p>
                <p
                  className="text-1 text-color-default wow animate__fadeInUp animate__animated"
                  data-wow-duration="1.5s"
                  data-wow-delay="0s"
                >
                 As much as we take pride in our range of offering, we are also proud of our industry-best practices, transparency and customer service. And this inspires us to do more and venture into many more challenges with confidence.
                </p>
              </div>
              <div className="bot">
                <a
                  href="#"
                  className="tf-btn bg-color-primary rounded-cycle height-3 pd-15 wow animate__fadeInUp animate__animated"
                >
                  Explore our homes
                  <i className="icon-arrow-up-right" />
                </a>
                
              </div>
            </div>
            <div className="right">
              <div className="img-style img-custom-anim-left wow">
                <Image
                  className="lazyload"
                  data-src="/images/banner/section-about-2.webp"
                  alt=""
                  width={790}
                  height={700}
                  src="/images/banner/section-about-2.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
