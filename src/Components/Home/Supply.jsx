import { SUPPLY_DATA } from "@/Components/lib/data";
import Image from "next/image";

export default function SupplySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {SUPPLY_DATA.map((item) => (
          <div 
            key={item.id} 
            className={`flex flex-col md:flex-row items-center justify-between mb-24 ${item.id === 2 ? 'justify-end' : ''}`}
          >
            {/* Matn qismi */}
            <h2 className={`text-[45px] font-bold text-[#000080] leading-[1.1] max-w-[600px] ${item.id === 2 ? 'text-right' : ''}`}>
              <span className="text-red-600">{item.highlight}</span> {item.text}
            </h2>


            {item.image && (
              <div className="relative w-[450px] h-[350px] mt-8 md:mt-0">
                <Image 
                  src={item.image} 
                  alt={item.highlight} 
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