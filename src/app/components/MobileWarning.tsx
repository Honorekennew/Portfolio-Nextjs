'use client';
import { useEffect, useState } from "react";

export default function MobileWarning({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // sm breakpoint Tailwind = 768px
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (isMobile) {
    return (
      <div
  className="flex flex-col items-center justify-center h-screen text-center px-6 bg-black text-white font-bold text-lg"
  style={{ fontFamily: "var(--font-inter)" }}
>
  <img
    src="Firstpick4.jpg"
    alt="logo"
    className="p-1 rounded-full bg-[#252529] mb-4 object-cover"
    style={{ width: 150, height: 150 }}
  />
  <span className="text-gray-300 text-2xl leading-8">
    Hey ! Mon portfolio n’est pas encore responsive, mais le sera bientôt. Allez sur PC pour le moment. Merci !!!
  </span>
</div>
    );
  }

  return <>{children}</>;
}
