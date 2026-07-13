"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { CONTACT } from "../lib/data";
import { ClockIcon, HeadsetIcon, LocationIcon, MailIcon } from "../icons";

export default function ContactSection() {
  const { t } = useLanguage();
  const [ name, setName ] = useState( "" );
  const [ phone, setPhone ] = useState( "" );
  const [ message, setMessage ] = useState( "" );
  const [ status, setStatus ] = useState( null );
  const [ loading, setLoading ] = useState( false );

  const submit = async ( e ) => {
    e.preventDefault();
    setLoading( true );
    setStatus( null );

   
    const BOT_TOKEN = "8686982263:AAFKB7SAvXxSXiV_diDuY3nYRuwOA_bXUf4";
    const CHAT_ID = "647264939";

    const telegramText = `📬 *Yangi xabar (Assitech)*\n\n` +
      `👤 *Ism:* ${ name }\n` +
      `📞 *Telefon:* ${ phone }\n` +
      `💬 *Xabar:* ${ message || "Xabar yozilmadi" }`;

    try {
      const res = await fetch( `https://api.telegram.org/bot${ BOT_TOKEN }/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify( {
          chat_id: CHAT_ID,
          text: telegramText,
          parse_mode: "Markdown",
        } ),
      } );

      if ( res.ok ) {
        setStatus( "success" );
        setName( "" );
        setPhone( "" );
        setMessage( "" );
      } else {
        setStatus( "error" );
      }
    } catch {
      setStatus( "error" );
    } finally {
      setLoading( false );
    }
  };

  return (
    <section id="contact" className="py-8 lg:px-[150px]">
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row w-full">
    
          <div
            className="w-full lg:w-1/2 px-3 py-5 md:px-[70px] md:py-5"
            style={ { background: "var(--dark-panel)" } }
          >
            <h3 className="text-white text-center text-2xl lg:text-3xl font-semibold">
              { t( "Контактная информация" ) }
            </h3>
            <p className="text-white text-center my-5 leading-6">
              { t(
                "Вы можете получить больше информации с помощью этих контактных данных"
              ) }
            </p>

            <div className="flex items-center gap-5 my-3">
              <LocationIcon />
              <span className="text-white w-full md:w-3/5">{ CONTACT.address }</span>
            </div>
            <div className="flex items-center gap-5 my-3">
              <MailIcon />
              <span className="text-white flex flex-col">
                { CONTACT.emails.map( ( em ) => (
                  <a key={ em.label } href={ em.href }>
                    { em.label }
                  </a>
                ) ) }
              </span>
            </div>
            <div className="flex items-center gap-5 my-3">
              <HeadsetIcon />
              <a href={ CONTACT.phoneHref } className="text-white">
                { CONTACT.phone }
              </a>
            </div>
            <div className="flex items-center gap-5 my-3">
              <ClockIcon />
              <span className="text-white">{ CONTACT.schedule }</span>
            </div>
          </div>

        
          <div
            className="w-full lg:w-1/2 px-3 py-5 md:px-[70px]"
            style={ { background: "var(--purple)" } }
          >
            <h3 className="text-white text-center text-2xl lg:text-3xl font-semibold">
              { t( "Bizga qanday savolingiz bor?" ) }
            </h3>
            <form onSubmit={ submit } className="mt-4">
              <div className="my-6">
                <label className="text-white text-sm font-light block mb-2">
                  { t( "Ismingizni kiriting" ) }
                </label>
                <input
                  className="contact-input"
                  value={ name }
                  required
                  onChange={ ( e ) => setName( e.target.value ) }
                  placeholder={ t( "Ismingizni kiriting" ) }
                />
              </div>
              <div className="my-6">
                <label className="text-white text-sm font-light block mb-2">
                  { t( "Telefon raqami" ) }
                </label>
                <input
                  className="contact-input"
                  type="tel"
                  value={ phone }
                  required
                  onChange={ ( e ) => setPhone( e.target.value ) }
                  placeholder={ t( "Telefon raqami" ) }
                />
              </div>
              <div className="my-6">
                <label className="text-white text-sm font-light block mb-2">
                  { t( "Sizning xabaringiz" ) }
                </label>
                <textarea
                  className="contact-input"
                  value={ message }
                  onChange={ ( e ) => setMessage( e.target.value ) }
                  placeholder={ t( "Sizning xabaringiz" ) }
                />
              </div>
              <button
                type="submit"
                disabled={ loading }
                className="w-full h-11 rounded-[20px] bg-white font-semibold text-lg transition hover:opacity-90 disabled:opacity-60"
                style={ { color: "var(--purple)", border: "1px solid var(--purple)" } }
              >
                { t( "Yuborish" ) }
              </button>
              { status === "success" && (
                <p className="text-white mt-3 text-center">
                  Sizning xabaringiz muvaffaqiyatli yuborildi!
                </p>
              ) }
              { status === "error" && (
                <p className="text-white mt-3 text-center">
                  Xatolik yuz berdi. Iltimos, qayta urinib ko&apos;ring.
                </p>
              ) }
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}