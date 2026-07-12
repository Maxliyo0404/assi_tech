// src/app/layout.js

import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body>
     
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}