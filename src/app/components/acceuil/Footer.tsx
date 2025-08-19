import Link from "next/link";

export default function Footer() {
    return (
        <div>
            <div className="w-full">
                <hr className="border-t border-white/5 mt-30" />
            </div>
            <div className="flex justify-between my-10 w-[90%]">
                <div>
                    <span className="text-gray-400 text-sm font-medium ml-10" style={{ fontFamily: "var(--font-inter)" }}>© 2025 Honore KENNE. All rights reserved.</span>
                </div>
                <div className="space-x-4 ml-5">
                    {["About", "Project", "Experience"].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className="text-white font-medium transition-colors duration-300 hover:text-[#23A1B5]"
                            style={{ fontFamily: "var(--font-inter)" }}
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}