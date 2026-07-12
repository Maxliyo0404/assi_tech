
import "./globals.css";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import { LanguageProvider } from "@/i18n/LanguageProvider";
export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body>
        <LanguageProvider>
          <Header/>
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      
      </body>
    </html>
  );
}