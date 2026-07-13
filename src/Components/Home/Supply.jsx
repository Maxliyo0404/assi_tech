'use client';

import { SUPPLY_DATA} from "../lib/data"; 
import { useLanguage } from "@/i18n/LanguageProvider";
import Image from "next/image";

export default function SupplySection() {
 const { lang, t } = useLanguage(); 


  if (!t) return null; 


 return (
    <section className="py-20 bg-white w-full">
      <div className="container mx-auto px-4">
        {SUPPLY_DATA.map((item) => (
          <div key={item.id} className="flex flex-col md:flex-row items-center justify-between w-full mb-24 gap-10">
            
            {/* Agar rasm bo'lsa matn 60%, bo'lmasa 100% joy egallaydi */}
            <h2 className={`font-bold text-[#000080] leading-[1.1] text-left ${item.image ? 'text-[45px] w-full md:w-[60%]' : 'text-[45px] w-full text-center'}`}>
              <span className="text-red-600">
                {t(item.titleKey)}
              </span>{" "}
              {t(item.textKey)}
            </h2>

            {/* Rasm faqat mavjud bo'lganda chiqadi */}
            {item.image && (
              <div className="relative w-full md:w-[400px] h-[300px] shrink-0">
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