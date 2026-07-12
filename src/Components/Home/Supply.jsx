'use client';

import { SUPPLY_DATA, TRANSLATIONS } from "../lib/data"; 
import { useLanguage } from "@/i18n/LanguageProvider";
import Image from "next/image";

export default function SupplySection() {
  const { lang } = useLanguage(); 

  // Agar til aniqlanmasa, default 'en' ni olamiz
  const t = TRANSLATIONS[lang] || TRANSLATIONS["en"];

  return (
    <section className="py-20 bg-white w-full">
      <div className="container mx-auto px-4">
        {SUPPLY_DATA.map((item) => (
          <div key={item.id} className="flex flex-col md:flex-row items-center justify-between w-full mb-24">
            
            <h2 className="text-[45px] font-bold text-[#000080] leading-[1.1] w-full md:w-[60%] text-left">
              <span className="text-red-600">
                {t[item.titleKey]}
              </span>{" "}
              {t[item.textKey]}
            </h2>

            {item.image && (
              <div className="relative w-full md:w-[400px] h-[300px] mt-8 md:mt-0 shrink-0">
                <Image 
                  src={item.image} 
                  alt={t[item.titleKey]} 
                  fill 
                  className="object-contain" 
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}