import Link from "next/link";
export default function SocialMedia() {
    return (
        <div className="flex justify-between mt-25 ml-20 mr-20 w-[85%]">
            {/* Image principale */}
            <div>
                <img
                    src="/Firstpick4.jpg"
                    alt="First picture"
                    className="w-[400px] h-[400px] rounded-[15px] object-cover cursor-pointer transform rotate-5 shadow-lg hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Liens réseaux sociaux */}
            <div className="flex flex-col mt-4">
                {[
                    { icon: "linkdin.png", label: "Let’s follow on LinkedIn", url: "https://www.linkedin.com/in/honore-kenne-72094928b/" },
                    { icon: "X.png", label: "Let’s follow on X", url: "https://x.com/HonoreKenneW" },
                    { icon: "Github.png", label: "Let’s follow on GitHub", url: "https://github.com/honorekennew" },
                    { icon: "Instagram.png", label: "Let’s follow on Instagram", url: "https://www.instagram.com/honorekennew/" },
                ].map((item, i) => (
                    <a
                        key={i}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 mb-2 transition duration-300 group hover:opacity-90"
                    >
                        <img
                            src={`/${item.icon}`}
                            alt={item.icon}
                            className="w-10 h-10 opacity-60 transition-transform duration-300 
                                group-hover:scale-110 group-hover:brightness-0 group-hover:invert 
                                group-hover:sepia group-hover:saturate-500 group-hover:hue-rotate-260"
                        />
                        <span
                            className="text-white font-medium transition-colors duration-300 group-hover:text-[#23A1B5]"
                            style={{ fontFamily: "var(--font-inter)" }}
                        >
                            {item.label}
                        </span>
                    </a>
                ))}

                {/* Ligne de séparation */}
                <div className="w-[95%] ml-5">
                    <hr className="border-t border-white/10 mt-10" />
                </div>

                {/* Certifications */}
                <div className="mt-5 ml-5 cursor-pointer ">

                    <Link
                        href="/certification"
                        className="text-[#23A1B5] font-medium mt-1 cursor-pointer hover:opacity-90"
                        style={{ fontFamily: "var(--font-inter)" }}
                    >
                        Certifications
                    </Link>
                </div>
            </div>

        </div>
    );
}