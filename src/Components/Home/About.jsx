
"use client";

import Image from "next/image";
// MASHU QATOR YETISHMAYAPTI:
import { useLanguage } from "@/i18n/LanguageProvider"; 


export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="w-full py-9">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl xl:text-[45px] leading-[55px] tracking-wide" style={{ color: "var(--navy)" }}>
          {t("ASSI Tech")}
        </h2>
        
        {/* Flex kontent */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 mt-6">
          
          {/* Matnlar qismi */}
          <div className="grid md:grid-cols-2 gap-5 md:gap-10 w-full">
            <div>
              <p className="text-base leading-6 my-2.5">{t("text1")}</p>
              <p className="text-base leading-6 my-2.5">{t("text2")}</p>
            </div>
            <div>
              <p className="text-base leading-6 my-2.5">{t("text3")}</p>
              <p className="text-base leading-6 my-2.5">{t("text4")}</p>
              <p className="text-base leading-6 my-2.5">{t("text5")}</p>
              <p className="text-base leading-6 my-2.5">{t("text6")}</p>
            </div>
          </div>

          {/* Rasm qismi (w-full va max-w-sm qo'shildi) */}
          <div className="w-full lg:w-1/3 flex-shrink-0">
            <Image
              src="/assi_img/about.jpg"
              alt="ASSI Tech"
              width={400}
              height={300}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}