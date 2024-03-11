import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "../common/Dropdown/Dropdown";

const LangItem = ({ item }) => (
  <div className="p-2 flex items-center justify-between gap-2 hover:text-slate-100">
    <span className="text-xs">{item.title}</span>
    <div className="relative" style={{ width: 30, height: "20px" }}>
      <Image
        className="rounded-md h-full"
        src={`/images/${item.src}`}
        objectFit="cover"
        fill
        alt="Flag"
      ></Image>
    </div>
  </div>
);

const Header = () => {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  return (
    <nav className="flex justify-between">
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
      <Dropdown
        items={[
          <LangItem
            item={{ title: "PERSIAN", src: "iran-flag.svg" }}
          ></LangItem>,
          <LangItem
            item={{ title: "ENGLISH", src: "england-flag.svg" }}
          ></LangItem>,
        ]}
      >
        <div className="flex gap-3 items-center pointer select-none">
          <p>{t("lang")}</p>
          <div className="relative" style={{ width: 40, height: "30px" }}>
            <Image
              className="rounded-md h-full"
              src="/images/iran-flag.svg"
              objectFit="cover"
              fill
              alt="Flag"
            ></Image>
          </div>
        </div>
      </Dropdown>
    </nav>
  );
};

export default Header;
