import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-4">
      <div className="container">
        <Image
          src="/assi_img/hero.jpg"
          alt="ASSI Tech"
          width={1600}
          height={550}
          priority
          className="w-full h-[300px] md:h-[550px] object-cover rounded-[20px]"
        />
      </div>
    </section>
  );
}
