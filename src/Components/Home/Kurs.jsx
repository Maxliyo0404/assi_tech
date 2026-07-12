"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export default function Kurs() {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: "var(--navy)" }}>
          {t("kurs.title1")}
        </h2>
        <div className="space-y-4">
          <h4 className="text-xl md:text-2xl font-medium text-gray-800">{t("kurs.title2")}</h4>
          <h4 className="text-xl md:text-2xl font-medium text-gray-800">{t("kurs.title3")}</h4>
          <h4 className="text-xl md:text-2xl font-medium text-gray-800">{t("kurs.title4")}</h4>
          <h4 className="text-xl md:text-2xl font-medium text-gray-800">{t("kurs.title5")}</h4>
          <h4 className="text-xl md:text-2xl font-medium text-gray-800">{t("kurs.title6")}</h4>
        </div>
      </div>
    </section>
  );
}