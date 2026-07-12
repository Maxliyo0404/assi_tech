import { SUPPLY_DATA } from "@/Components/lib/data";
import Image from "next/image";

export default function SupplySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {SUPPLY_DATA.map((item, index) => (
          <div 
            key={item.id} 
            // index % 2 !== 0 bo'lsa, blok joylashuvini teskari qilamiz (Zig-zag)
            className={`flex flex-col md:flex-row items-center gap-12 my-20 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Matn qismi */}
            <div className="flex-1">
              <h2 className="text-[32px] md:text-[50px] leading-[1.1] font-bold text-[#000080]">
                <span className="text-red-600">{item.highlight}</span> {item.text}
              </h2>
            </div>

            {/* Rasm qismi */}
            <div className="relative w-full md:w-[500px] h-[300px] md:h-[400px]">
              <Image 
                src={item.image} 
                alt={item.highlight} 
                fill 
                className="object-contain" // Rasm butunlay ko'rinishi uchun contain
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}