"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { LANGS } from "@/i18n/translations";
import { CONTACT, SOCIALS } from "../lib/data";
import { FacebookIcon, InstagramIcon, TelegramIcon } from "../icons";

const FLAGS = {
  
  en: "/assi_img/en.png",
  uz: "/assi_img/uz.png",
  ru: "/assi_img/ru.png"
};

function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex items-center cursor-pointer" onClick={() => setOpen((v) => !v)}>
      <button className="flex items-center justify-center" aria-label="Language">
        <Image src={FLAGS[lang]} alt={lang} width={35} height={30} className="object-contain" />
      </button>
      {open && (
        <div className="absolute top-full right-0 mt-2 bg-white border rounded shadow-lg z-50">
          {LANGS.map((l) => (
            <div
              key={l}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setLang(l);
                setOpen(false);
              }}
            >
              <Image src={FLAGS[l]} alt={l} width={35} height={30} className="object-contain" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const { t } = useLanguage();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const goHash = (hash) => {
    if (window.location.pathname !== "/") {
      router.push("/" + hash);
    } else {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header>
      {/* Top bar */}
      <div style={{ background: "var(--navy-bar)" }} className="py-2.5">
        <div className="container flex justify-end">
          <div className="flex items-center gap-5">
            <a href={SOCIALS.instagram} target="_blank" rel="noreferrer" className="text-white"><InstagramIcon size={16} /></a>
            <a href={SOCIALS.telegram} target="_blank" rel="noreferrer" className="text-white"><TelegramIcon size={16} /></a>
            <a href={SOCIALS.facebook} target="_blank" rel="noreferrer" className="text-white"><FacebookIcon size={16} /></a>
            <a href={CONTACT.phoneHref} className="text-white text-sm tracking-wide">{CONTACT.phone}</a>
            <button
              onClick={() => setIsModalOpen(true)}
              style={{ background: "var(--red)" }}
              className="text-white text-sm font-semibold px-4 py-1.5 rounded-md hover:opacity-90 transition"
            >
              {t("Contact")}
            </button>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white py-4">
        <div className="container flex items-center justify-between">
         <Link href="/">
            <Image
              src="/assi_img/logo.jpg"
              alt="Assitech"
              width={220}
              height={65}
              className="object-contain w-[160px] xl:w-[220px] h-auto"
              priority
            />
          </Link>
          <div className="flex items-center gap-5 md:gap-6">
            <button onClick={() => goHash("#about")} className="nav-link hidden lg:inline-block text-sm xl:text-base">{t("About Us")}</button>
            <button onClick={() => goHash("#product")} className="nav-link hidden lg:inline-block text-sm xl:text-base">{t("Projects")}</button>
            <button onClick={() => goHash("#services")} className="nav-link hidden lg:inline-block text-sm xl:text-base">{t("News")}</button>
            <button onClick={() => goHash("#contact")} className="nav-link hidden lg:inline-block text-sm xl:text-base">{t("Contact")}</button>
            <Link href="/instal" className="nav-link hidden lg:inline-block text-sm xl:text-base">{t("Установка")}</Link>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Modal qismi */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-2 right-4 text-2xl font-bold">&times;</button>
            <h2 className="text-xl font-bold mb-4">{t("Bizga qanday savolingiz bor?")}</h2>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder={t("Ismingizni kiriting")} className="border p-2 rounded w-full" />
              <input type="text" placeholder={t("Telefon raqami")} className="border p-2 rounded w-full" />
              <button type="submit" className="bg-[#d32f2f] text-white py-2 rounded font-bold hover:bg-red-700">{t("Yuborish")}</button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}