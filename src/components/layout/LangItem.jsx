"use client";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useLocale } from "next-intl";

const LangItem = ({ item, lang }) => {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const changeLanguage = () => {
    router.replace(pathname.replace(locale, lang));
  };
  return (
    <>
      <div
        className="p-2 flex items-center justify-between gap-2 hover:text-slate-100"
        onClick={changeLanguage}
      >
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
    </>
  );
};

export default LangItem;
