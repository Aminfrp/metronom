import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const Header = () => {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  return (
    <nav>
      <ul className="flex list-style-none gap-5 ">
        <li className="pointer">
          <Link href="/">{t("home")}</Link>
        </li>
        <li className="pointer">
          <Link href={`${locale}/metronome`}>{t("metronome")}</Link>
        </li>
        <li className="pointer">
          <Link href={`${locale}/blog`}>{t("blog")}</Link>
        </li>
        <li className="pointer">
          <Link href={`${locale}/about`}>{t("about")}</Link>
        </li>
        <li className="pointer">
          <Link href={`${locale}/contactus`}>{t("contactus")}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
