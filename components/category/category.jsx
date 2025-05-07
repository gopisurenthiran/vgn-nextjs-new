"use client";
import { categories } from "@/data/categories";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { Pagination } from "swiper/modules";
import { category } from "@/data/category";

export default function Category({
  parentClass = "tf-spacing-1 section-categories pb-0",
}) {
  return (
    <section className={parentClass}>
      <div className="container">
        <div className="heading-section text-center mb-48">
          <h2 className="title split-text effect-right">
            <SplitTextAnimation text="VGN Advantages" />
          </h2>
          <p className="text-1 split-text split-lines-transform">
            Thousands of luxury home enthusiasts just like you have found their
            dream home
          </p>
        </div>
        <div className="wrap-categories-sw">
          <Swiper
            dir="ltr"
            className="swiper sw-layout style-pagination"
            spaceBetween={15}
            breakpoints={{
              0: { slidesPerView: 2 },
              575: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination]}
            pagination={{
              el: ".spd2",
            }}
          >
            {category.map((category, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <a
                  href="#"
                  className={`categories-item ${
                    category.isActive ? "active" : ""
                  }`}
                >
                  <div className="icon-box">
                    <i className={`icon ${category.icon}`}></i>
                  </div>
                  <div className="content text-center">
                  <p>{category.list}</p>
                    <h5>{category.name}</h5>
                  </div>
                </a>
              </SwiperSlide>
            ))}

            <div className="sw-pagination sw-pagination-layout text-center d-lg-none d-block mt-20 spd2" />
          </Swiper>
        </div>
      </div>
    </section>
  );
}
