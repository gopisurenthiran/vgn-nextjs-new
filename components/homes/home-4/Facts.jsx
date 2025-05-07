import OdometerComponent from "@/components/common/OdometerComponent";
import { counters2 } from "@/data/facts";
import React from "react";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
export default function Facts() {
  return (
    <section className="section-box-team style-2 tf-spacing-1 pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="content-inner">
              <div className="heading-section mb-48">
                <h2 className="title split-text effect-right">
                  <SplitTextAnimation text=" Trust, Quality, Transparency since 1942" />
                </h2>
              </div>
              <div
                className="content mb-48 wow animate__fadeInUp animate__animated"
                data-wow-duration="1s"
                data-wow-delay="0s"
              >
                <p className="text-1 description-1 mb-16">
                VGN is a leader, visionary and a pioneer in the real estate business and stands out distinctly among its competitors. Headquartered in Chennai, we are one of the oldest and most trusted real estate companies, certified by ISO 14001:2004. Years of experience helped us create our own path by understanding our customer’s desires and helped us improve their quality of life by providing them with the best projects.  
                </p>
                <p className="description-2 text-1 mb-24">
                  We stand ready to serve you as your California real estate
                  team.
                </p>
                <a
                  href="#"
                  className="tf-btn bg-color-primary pd-12 fw-7 wow animate__fadeInUp animate__animated"
                  data-wow-duration="1s"
                  data-wow-delay="0s"
                >
                  Read More
                </a>
              </div>
              <div className="wrap-counter">
                {counters2.map((counter) => (
                  <div className="counter-item style-2" key={counter.id}>
                    <div className="count">
                      <div className="icons">
                        <i className={counter.icon} />
                      </div>
                      <div className="counter-number">
                        <div
                          className={`odometer style-2 style-2-${counter.id}`}
                        >
                          <OdometerComponent max={counter.number} />
                        </div>
                        {counter.hasSubNumber && (
                          <span>{counter.subNumber}</span>
                        )}
                        {counter.subText && (
                          <span className="sub plus">{counter.subText}</span>
                        )}
                      </div>
                      <p className="text-4">{counter.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="wrap-image relative">
              <div
                className="image-wrap hover-img-wrap img-1 animate__zoomIn wow animate__animated"
                data-wow-duration="2s"
              >
                <Image
                  className="lazyload parallax-img"
                  data-src="/images/banner/build-1.png"
                  alt=""
                  width={400}
                  height={509}
                  src="/images/banner/build-1.png"
                />
              </div>
              <div
                className="image-wrap hover-img-wrap img-2 animate__zoomIn wow animate__animated"
                data-wow-duration="2s"
              >
                <Image
                  className="lazyload parallax-img"
                  data-src="/images/banner/build-2.png"
                  alt=""
                  width={400}
                  height={509}
                  src="/images/banner/build-2.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
