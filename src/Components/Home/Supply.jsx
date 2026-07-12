import { SUPPLY_DATA } from "@/Components/lib/data";
import Image from "next/image";
export default function SupplySection() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="container">
        {SUPPLY_DATA.map((item) => (
          <div key={item.id} className="flex items-center gap-8 my-12">
            <h2 className="text-[40px] leading-tight font-bold text-navy">
              <span className="text-red-600">{item.highlight}</span> {item.text}
            </h2>
             <div className="relative w-[300px] h-[300px]">
              <Image 
                src={item.image} 
                alt={item.highlight} 
                fill 
                className="object-cover rounded-md" 
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}