
import "./globals.css";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body>
       <Header/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}