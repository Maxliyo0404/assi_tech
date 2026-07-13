'use client';

import { SUPPLY_DATA} from "../lib/data"; 
import { useLanguage } from "@/i18n/LanguageProvider";
import Image from "next/image";

export default function SupplySection() {
 const { lang, t } = useLanguage(); 


  if (!t) return null; 


 return (
    <section className="py-16 bg-white w-full">
      <div className="container mx-auto px-4">
        {SUPPLY_DATA.map((item) => (
          <div 
            key={item.id} 
            className={`flex flex-col md:flex-row items-center justify-between mb-20 gap-10 ${
              item.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Matn qismi: max-w bilan chekladik, rasmga yopishib qolmaydi */}
            <div className="w-full md:w-1/2 max-w-[600px]">
              <h2 className="text-[32px] md:text-[45px] font-bold text-[#000080] leading-[1.1] text-left">
                <span className="text-red-600">{t(item.titleKey)}</span>{" "}
                {t(item.textKey)}
              </h2>
            </div>

            {/* Rasm qismi */}
            {item.image && (
              <div className="w-full md:w-[400px] h-[300px] relative shrink-0">
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