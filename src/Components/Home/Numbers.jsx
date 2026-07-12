"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { NUMBERS } from "../lib/data";

function useCountUp(end, active, duration = 2200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let raf;
    let start;
    const step = (ts) => {
      if (start === undefined) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setValue(Math.floor(progress * end));
      if (progress < 1) raf = requestAnimationFrame(step);
      else setValue(end);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, end, duration]);

  return value;
}

function Stat({ end, label, active }) {
  const value = useCountUp(end, active);
  return (
    <div className="flex flex-col items-center">
      <div className="font-heading font-semibold text-[26px] sm:text-[45px] lg:text-[62px] leading-[60px] lg:leading-[80px]">
        {value}
        <span style={{ color: "var(--navy)" }}>+</span>
      </div>
      <p className="font-heading text-lg leading-[22px]" style={{ color: "#2a3437" }}>
        {label}
      </p>
    </div>
  );
}

export default function Numbers() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="my-8 mt-20">
      <div className="container">
        <div
          ref={ref}
          className="bg-white rounded-[24px] p-4 sm:p-8 lg:px-10 lg:py-8"
          style={{ boxShadow: "0 9px 18px 0 rgba(144,173,248,0.25)" }}
        >
          <h2
            className="font-heading font-bold text-2xl xl:text-[32px] leading-[38px]"
            style={{ color: "var(--navy)" }}
          >
            {t("hello11")}
          </h2>
          <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center mt-8 gap-x-16 gap-y-6">
            {NUMBERS.map((n) => (
              <Stat key={n.key} end={n.end} label={t(n.key)} active={active} />
            ))}
            <Image
              src="/assi_img/raketa1.png"
              alt="rocket"
              width={120}
              height={200}
              className="hidden xl:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
