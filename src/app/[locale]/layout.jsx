import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import localFont from "next/font/local";
import "./globals.css";

const vazirFont = localFont({
  src: "../../../public/font/Vazirmatn-Regular.ttf",
});

export const metadata = {
  title: "مترونوم",
  description: "مترونوم",
};

export default function LocaleLayout({ children, params: { locale } }) {
  return (
    <html lang={locale} dir={locale === "fa" ? "rtl" : "ltr"}>
      <body className={`flex flex-col h-100 ${vazirFont.className}`}>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
