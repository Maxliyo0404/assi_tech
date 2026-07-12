"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";
import { SERVICES } from "../lib/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper stilini import qilish
import "swiper/css";
import "swiper/css/pagination";

export default function Support() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-12 scroll-mt-24 container">
      <h2
        className="font-heading text-[23px] lg:text-[50px] leading-[30px] lg:leading-[55px] mb-12"
        style={{ color: "var(--navy)" }}
      >
        <b style={{ color: "var(--red)" }}>{t("Сопровождаем")}</b>{" "}
        {t("клиента на всех этапах")}
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true} // Cheksiz aylanish
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="pb-12"
      >
        {SERVICES.map((s) => (
          <SwiperSlide key={s.id}>
            <Link
              href={`/service/${s.id}`}
              className="relative block w-full h-[340px] rounded-lg overflow-hidden group"
            >
              {/* Rasm */}
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Qorayish effekti */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
              
              {/* Yozuv */}
              <span className="absolute bottom-6 left-6 text-white font-bold text-xl z-10">
                {s.title}
              </span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}