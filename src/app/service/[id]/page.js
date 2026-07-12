"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";
import { SERVICES } from "@/Components/lib/data";

export default function Support() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-12 scroll-mt-24">
      <div className="container">
        <h2
          className="font-heading text-[23px] lg:text-[50px] leading-[30px] lg:leading-[55px] lg:w-[850px]"
          style={{ color: "var(--navy)" }}
        >
          {" "}
          <b style={{ color: "var(--red)" }}>{t("Сопровождаем")}</b>{" "}
          {t("клиента на всех этапах")}
        </h2>

        <div className="hscroll mt-8">
          {SERVICES.map((s) => (
            <Link
              key={s.id}
              href={`/service/${s.id}`}
              className="service-card w-[280px] rounded-md"
            >
              <Image src={s.image} alt={s.title} width={280} height={340} />
              <span>{s.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
