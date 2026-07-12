"use client";

import "./Header.css";
import React from 'react';
import { useLanguage } from "./LanguageProvider"; // Contextingizni import qiling

export default function Header() {
  const { t, lang, setLang } = useLanguage();

  return (
    <header className="header">
      {/* 1. Yuqori panel (Top Bar) */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="socials">
              <a href="#">Instagram</a>
              <a href="#">Telegram</a>
              <a href="#">Facebook</a>
            </div>
            <div className="contact-right">
              <span>+998 99 815 98 85</span>
              {/* Til tanlash */}
              <select value={lang} onChange={(e) => setLang(e.target.value)}>
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
                <option value="en">EN</option>
              </select>
              <button className="contact-btn">{t("Aloqa")}</button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Asosiy Navbar */}
      <div className="navbar">
        <div className="container">
          <div className="logo">ASSI Tech</div>
          <nav>
            <ul>
              <li><a href="#">{t("Biz haqimizda")}</a></li>
              <li><a href="#">{t("Mahsulotlar")}</a></li>
              <li><a href="#">{t("Xizmatlar")}</a></li>
              <li><a href="#">{t("Aloqa")}</a></li>
              <li><a href="#">{t("O'rnatish")}</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}