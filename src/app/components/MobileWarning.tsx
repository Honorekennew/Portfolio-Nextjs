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
      <div className="flex items-center justify-center h-screen text-center px-4 bg-black text-white font-bold text-lg" style={{fontFamily: "var(--font-inter)"}}>
         Hey ! Mon portfolio n’est pas encore responsive, mais le sera bientôt… allez sur PC pour le moment. Merci !!!
      </div>
    );
  }

  return <>{children}</>;
}
