'use client';

import { SUPPLY_DATA} from "../lib/data"; 
import { useLanguage } from "@/i18n/LanguageProvider";
import Image from "next/image";

export default function SupplySection() {
 const { lang, t } = useLanguage(); 


  if (!t) return null; 


 return (
    <section className="py-12 bg-white w-full">
      {/* Container hamma narsani markazlaydi va chetlarini yig'adi */}
      <div className="container mx-auto px-4">
        {SUPPLY_DATA.map((item) => (
          <div 
            key={item.id} 
            className={`flex flex-col md:flex-row items-center justify-between mb-12 gap-6 ${
              item.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Matn qismi: w-1/2 orqali kenglikni chekladik */}
            <div className="w-full md:w-1/2">
              <h2 className="text-[32px] md:text-[45px] font-bold text-[#000080] leading-[1.1] text-left">
                <span className="text-red-600">{t(item.titleKey)}</span>{" "}
                {t(item.textKey)}
              </h2>
            </div>

            {/* Rasm qismi: Container ichida qoladi */}
            {item.image && (
              <div className="w-full md:w-[400px] h-[250px] relative">
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