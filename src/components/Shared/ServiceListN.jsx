// "use client";
import Link from "next/link";
// import { usePathname } from "next/navigation";

export const ServiceList = ({ title, data, url, closeMegaMenu }) => {
  // const pathname = usePathname();
  // const spliitedText = pathname.split("/").filter(Boolean)[2];
  // console.log(data, "url");
  return (
    <div className="space-y-2 ">
      <p className="font-sora font-base font-semibold leading-[190%]-- heading-gradient">
        <Link onClick={closeMegaMenu} href={url}>
          {title}
        </Link>
      </p>
      <ul className="space-y-3 linksGap">
        {data?.map((item, index) => (
          <li
            className="font-satoshi text-[#101763] text-sm font-normal leading-[182%]-- hover:text-[#d81100] transition-all duration-300"
            key={index}
          >
            <Link onClick={closeMegaMenu} href={item?.url}>
              {item?.title}
            </Link>
            {item?.subTitle && (
              <span className="text-xs block">{item?.subTitle}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
