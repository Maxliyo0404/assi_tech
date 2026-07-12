import { SUPPLY_DATA } from "@/Components/lib/data";
import Image from "next/image";

export default function SupplySection() {
  return (
    <section className="py-20 bg-white w-full">
      <div className="container mx-auto px-4 w-full">
        
        {/* 1-blok: Supply (H2 va Rasm bitta qatorda) */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full mb-24">
          <h2 className="text-[45px] font-bold text-[#000080] leading-[1.1] w-full md:w-[60%]">
            <span className="text-red-600">Supply</span> medical equipment directly from the manufacturer
          </h2>
          
          {/* Rasm chekkada (o'ng tomonda) */}
          <div className="relative w-full md:w-[400px] h-[300px] mt-8 md:mt-0 shrink-0">
            <Image 
              src="/assets/service1-g9rlDz2O.jpg" 
              alt="Medical Equipment" 
              fill 
              className="object-contain" 
            />
          </div>
        </div>

        {/* 2-blok: Solve (Pastda, o'ngga surilgan) */}
        <div className="flex justify-end w-full">
          <h2 className="text-[45px] font-bold text-[#000080] leading-[1.1] w-full md:w-[60%] text-right">
            <span className="text-red-600">Solve</span> tasks of comprehensive medical equipment and service maintenance
          </h2>
        </div>

      </div>
    </section>
  );
}