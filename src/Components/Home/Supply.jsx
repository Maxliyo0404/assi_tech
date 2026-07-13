'use client';

import { SUPPLY_DATA} from "../lib/data"; 
import { useLanguage } from "@/i18n/LanguageProvider";
import Image from "next/image";

export default function SupplySection() {
 const { lang, t } = useLanguage(); 


  if (!t) return null; 


 return (
    <section className="py-12 bg-white w-full">
      <div className="container mx-auto px-4">
        {SUPPLY_DATA.map((item) => (
          <div 
            key={item.id} 
            className={`flex flex-col md:flex-row items-center justify-between mb-16 gap-8 ${
              item.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Matn qismi: w-full dan md:w-1/2 ga o'zgartirdik */}
            <div className="w-full md:w-1/2">
              <h2 className="text-[40px] md:text-[45px] font-bold text-[#000080] leading-[1.1] text-left">
                <span className="text-red-600">
                  {t(item.titleKey)}
                </span>{" "}
                {t(item.textKey)}
              </h2>
            </div>

            {/* Rasm qismi: Rasmni o'zini o'rab turgan div balandligini cheklaymiz */}
            {item.image && (
              <div className="w-full md:w-[400px] h-[250px] relative shrink-0">
                <Image 
                  src={item.image} 
                  alt={t(item.titleKey)} 
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