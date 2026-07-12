import { SUPPLY_DATA } from "../lib/data";
import { useLanguage } from "@/i18n/LanguageProvider"J; 
import Image from "next/image";

export default function SupplySection() {
  const { lang } = useLanguage(); // Hozirgi til (ru, en, uz)

  return (
    <section className="py-20 bg-white w-full">
      <div className="container mx-auto px-4">
        {SUPPLY_DATA.map((item) => (
          <div key={item.id} className="flex flex-col md:flex-row items-center justify-between w-full mb-24">
            
            {/* Matn qismi (w-full va text-left) */}
            <h2 className="text-[45px] font-bold text-[#000080] leading-[1.1] w-full md:w-[60%] text-left">
              <span className="text-red-600">{item.content[lang].highlight}</span>{" "}
              {item.content[lang].text}
            </h2>

            {/* Rasm qismi (ID bo'yicha) */}
            {item.image && (
              <div className="relative w-full md:w-[400px] h-[300px] mt-8 md:mt-0 shrink-0">
                <Image 
                  src={item.image} 
                  alt={item.content[lang].highlight} 
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