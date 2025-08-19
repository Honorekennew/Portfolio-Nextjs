'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = ["About", "Project", "Experience"];

export default function Menu() {
  const pathname = usePathname();

  return (
    <div
      className="flex flex-col sm:flex-row items-center justify-center sm:space-x-6 space-y-2 sm:space-y-0
                 bg-[#252529] p-4 rounded-[100px] max-w-md mx-auto w-full sm:w-[380px] h-auto sm:h-[50px]"
      style={{ fontFamily: "var(--font-inter)" }}
    >
      {menuItems.map((item) => {
        const href = `/${item.toLowerCase()}`;
        const isActive = pathname === href;

        return (
          <Link
            key={item}
            href={href}
            className={`font-medium transition-colors duration-300 
                        ${isActive ? "text-[#23A1B5]" : "text-white"} 
                        hover:text-[#23A1B5]`}
          >
            {item}
          </Link>
        );
      })}

      <Link
        href="/#education"
        className="font-medium transition-colors duration-300 cursor-pointer hover:text-[#23A1B5]"
      >
        Education
      </Link>
    </div>
  );
}
