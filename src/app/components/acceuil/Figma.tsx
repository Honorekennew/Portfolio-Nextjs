import Link from "next/link";

export default function Figma() {
    return (
        <div className="mt-[550px] ml-20 rounded-[20px] border border-white/10 p-6 w-[85%] h-auto overflow-hidden">
            
            <div className="flex items-center space-x-4">
                <img
                    src="/Figma.jpeg"
                    alt="Logo Figma"
                    className="p-1 rounded-full bg-[#C4C4C4]"
                    style={{ width: 70, height: 70 }}
                />
                <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-inter)" }}>
                    Figma Design
                </span>
            </div>

            <div
                className="mt-3 ml-2 text-gray-300 text-base w-[90%] leading-7 break-words"
                style={{ fontFamily: "var(--font-inter)" }}
            >
                Une collection diversifiée de prototypes, interfaces conceptuelles et designs réels, soigneusement réalisés dans Figma pour garantir une expérience fluide et agréable aux utilisateurs sur toutes les plateformes.
            </div>

            <div className="mt-5" style={{ fontFamily: "var(--font-inter)" }}>
                <Link
                    href="/figma"
                    className="bg-white text-black px-5 py-2 rounded-[8px] hover:bg-white/80 transition-colors duration-300 space-x-2 font-medium cursor-pointer inline-block"
                >
                    Visite design <span>→</span>
                </Link>
            </div>
        </div>
    );
}
