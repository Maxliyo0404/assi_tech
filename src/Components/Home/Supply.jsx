import { SUPPLY_DATA } from "@/Components/lib/data";

export default function SupplySection() {
  return (
    <section className="py-12">
      <div className="container">
        {SUPPLY_DATA.map((item) => (
          <div key={item.id} className="flex items-center gap-8 my-12">
            <h2 className="text-[40px] leading-tight font-bold text-navy">
              <span className="text-red-600">{item.highlight}</span> {item.text}
            </h2>
            {/* Rasm qismini ehtiyojga qarab qo'shasiz */}
          </div>
        ))}
      </div>
    </section>
  );
}