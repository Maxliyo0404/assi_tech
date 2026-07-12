"use client";

import Image from "next/image";
import { Link, usePathname, useRouter } from "@/i18n/routing"; // next-intl routing
import { useState } from "react";
import { useLocale } from "next-intl"; // standart hook

// Flaglar ro'yxati
const FLAGS = {
  uz: "/assets/uzbek-CHK8xG06.png",
  ru: "/assets/russian-B_DAX6qp.png",
  en: "/assets/english-D4-lNQF2.png",
};

function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const changeLang = (nextLocale) => {
    router.replace(pathname, { locale: nextLocale });
    setOpen(false);
  };

  return (
    <div className="relative flex items-center">
      <button onClick={() => setOpen(!open)} aria-label="Language">
        <Image src={FLAGS[locale]} alt={locale} width={35} height={30} className="object-contain" />
      </button>
      {open && (
        <div className="custom-dropdown-menu absolute top-full right-0 bg-white shadow-lg p-2">
          {Object.keys(FLAGS).map((l) => (
            <button key={l} onClick={() => changeLang(l)} className="block p-1">
              <Image src={FLAGS[l]} alt={l} width={35} height={30} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const router = useRouter();

  // Hash bilan ishlash: Next.js da navigatsiya
  const goHash = (hash) => {
    router.push(`/${hash}`);
  };

  return (
    <header>
      <div style={{ background: "var(--navy-bar)" }} className="py-2.5">
        <div className="container flex justify-end">
          {/* Ijtimoiy tarmoqlar qismi o'zgarishsiz */}
        </div>
      </div>

      <nav className="bg-white py-4">
        <div className="container flex items-center justify-between">
          <Link href="/">
            <Image src="/assets/assitech-DUoU09t-.jpg" alt="Assitech" width={220} height={65} priority />
          </Link>
          
          <div className="flex items-center gap-5">
            {/* Navigatsiya uchun <button> o'rniga Link dan foydalanish tavsiya etiladi */}
            <Link href="/#about" className="nav-link">About Us</Link>
            <Link href="/#product" className="nav-link">Projects</Link>
            <Link href="/instal" className="nav-link">Установка</Link>
            
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );
}