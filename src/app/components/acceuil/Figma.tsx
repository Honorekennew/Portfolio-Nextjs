import Link from "next/link";

export default function Figma() {
    return (
        <div className="mt-[550px] ml-20 rounded-[20px] border border-white/10 p-6 w-[85%] h-[245px] overflow-hidden">
            <div className="flex items-center space-x-4">
                <img
                    src="/Figma.jpeg"
                    alt="Logo figma"
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
                A diverse collection of prototypes, concept UIs, and real-world designs, meticulously crafted in Figma to ensure a seamless and enjoyable experience for users across all platforms.
            </div>

            <div className="mt-5" style={{ fontFamily: "var(--font-inter)" }}>
                <Link
                    href="/figma"
                    className="bg-white text-black px-5 py-2 rounded-[8px] hover:bg-white/80 transition-colors duration-300 space-x-2 font-medium cursor-pointer"
                >
                    Visite design <span>→</span>
                </Link>
            </div>
        </div>
    );
}
