'use client';

import { SUPPLY_DATA} from "../lib/data"; 
import { useLanguage } from "@/i18n/LanguageProvider";
import Image from "next/image";

export default function SupplySection() {
 const { lang, t } = useLanguage(); 


  if (!t) return null; 


 return (
    <section className="py-16 bg-white w-full overflow-hidden">
      <div className="container mx-auto px-4">
        {SUPPLY_DATA.map((item) => (
          <div 
            key={item.id} 
            className={`relative flex flex-col md:flex-row items-center justify-between mb-20 gap-8 ${
              item.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-[55%] z-10">
              <h2 className="text-[35px] md:text-[45px] font-bold text-[#000080] leading-[1.1] text-left">
                <span className="text-red-600">{t(item.titleKey)}</span>{" "}
                {t(item.textKey)}
              </h2>
            </div>
            {item.image && (
              <div className="relative w-full md:w-[400px] h-[300px] flex items-center justify-center">
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