"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./about.css";

import Paragraph from "./paragraph";

const paragraph =
  "Sebagai mahasiswa Sistem Informasi dengan fokus pada pengembangan web, saya telah menemukan bahwa dunia ini menawarkan keseimbangan unik antara kreativitas dan teknologi. Selama studi saya, saya telah terlibat dalam berbagai proyek, termasuk pembuatan aplikasi e-commerce dan platform interaktif. Pengalaman ini tidak hanya mengasah keterampilan teknis saya tetapi juga memperkuat passion saya untuk menciptakan solusi digital yang inovatif dan efektif.";

const paragraph2 =
  "Sebagai seorang pengembang web, saya percaya bahwa teknologi harus selalu berfungsi untuk meningkatkan kualitas hidup dan pengalaman pengguna. Keseimbangan antara pekerjaan dan hobi, seperti olahraga dan eksplorasi sejarah, memberi saya perspektif yang lebih luas dalam mendekati masalah dan tantangan. Prinsip konsistensi dan dedikasi saya diterapkan tidak hanya dalam proyek profesional tetapi juga dalam pengembangan diri pribadi saya.";

const paragraph3 =
  "Saat ini, saya memiliki ambisi untuk menjadi Project Manager di masa depan. Dengan tekad untuk terus belajar dan berkembang, saya berkomitmen untuk mengasah keterampilan manajerial dan teknis saya. Saya juga bercita-cita untuk menciptakan aplikasi yang tidak hanya memenuhi kebutuhan pengguna tetapi juga memberi dampak positif bagi masyarakat. Saya yakin bahwa dengan semangat dan kerja keras, saya akan dapat menghadapi tantangan dan mencapai tujuan karier saya.";
const About = ({ id }) => {
  return (
    <section id={id}>
      <div className="container clearfix">
        <div className="row">
          <div className="about">
            <div className="profile profile1">
              <div className="aboutImgs" id="imgs1">
                <div className="imgs">
                  <Swiper
                    id="imgs1"
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    pagination={{ clickable: true, el: ".swiper-pagination" }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    spaceBetween={20}
                    grabCursor={true}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: "2",
                        spaceBetween: 40,
                      },
                      1024: {
                        slidesPerView: "auto",
                        spaceBetween: 50,
                      },
                    }}
                  >
                    <SwiperSlide>
                      <Image
                        src="/profile1.jpg"
                        alt="profile1"
                        width={500}
                        height={500}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src="/profile2.jpg"
                        alt="profile2"
                        width={500}
                        height={500}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src="/profile3.jpg"
                        alt="profile2"
                        width={500}
                        height={500}
                      />
                    </SwiperSlide>
                    <div className="swiper-pagination"></div>
                  </Swiper>
                </div>
              </div>
              <div className="aboutTxt">
                <div className="aboutSpan">
                  <span>About Myself</span>
                </div>
                <Paragraph paragraph={paragraph} />
              </div>
            </div>
            <div className="profile profile2">
              <div className="aboutImgs">
                <Image
                  src="/profile4.jpg"
                  alt="profile2"
                  width={500}
                  height={500}
                />
                <div className="classIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="200"
                    height="200"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFB6C1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="3" fill="#FFB6C1" />
                    <path
                      d="M12 2C14 3.5 16 5 16 8s-2 4.5-4 6c-2-1.5-4-3-4-6s2-4.5 4-6z"
                      fill="#FFD1DC"
                    />
                    <path
                      d="M12 2C10 3.5 8 5 8 8s2 4.5 4 6c2-1.5 4-3 4-6s-2-4.5-4-6z"
                      fill="#FFD1DC"
                    />
                    <path
                      d="M22 12C20 14 18 16 15 16s-4.5-2-6-4c1.5-2 3-4 6-4s4 2 6 4z"
                      fill="#FFF5E1"
                    />
                    <path
                      d="M2 12C4 14 6 16 9 16s4.5-2 6-4c-1.5-2-3-4-6-4s-4 2-6 4z"
                      fill="#FFF5E1"
                    />
                  </svg>
                </div>
                <div className="aboutTxt">
                  <div className="aboutSpan">
                    <span>This is who I am.</span>
                  </div>
                  <Paragraph paragraph={paragraph2} />
                </div>
              </div>
            </div>
            <div className="profile profile3">
              <div className="aboutImgs" id="imgs3">
                <div className="imgs">
                  <Swiper
                    id="imgs1"
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    pagination={{ clickable: true, el: ".swiper-pagination" }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    spaceBetween={20}
                    grabCursor={true}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: "2",
                        spaceBetween: 40,
                      },
                      1024: {
                        slidesPerView: "auto",
                        spaceBetween: 50,
                      },
                    }}
                  >
                    <SwiperSlide>
                      <Image
                        src="/profile5.jpg"
                        alt="profile1"
                        width={500}
                        height={600}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src="/profile6.jpg"
                        alt="profile2"
                        width={500}
                        height={600}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src="/profile7.jpg"
                        alt="profile2"
                        width={600}
                        height={600}
                      />
                    </SwiperSlide>
                    <div className="swiper-pagination"></div>
                  </Swiper>
                </div>
              </div>
              <div className="aboutTxt">
                <div className="aboutSpan">
                  <span>My Hope</span>
                </div>
                <p>{paragraph3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
