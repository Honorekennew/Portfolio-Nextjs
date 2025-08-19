"use Client";
import Link from "next/link";

interface FigmaCardProps {
    imageSrc: string;
    title: string;
    link: string;
    description: string;
}

export default function FigmaCard({ imageSrc, title, link, description }: FigmaCardProps) {
    return (
        <Link href={link} className="block">
            <div className="mt-15 ml-20 rounded-[20px] border border-white/10 w-[85%] h-[240px]
                            cursor-pointer hover:border-[#23A1B5]/20 hover:scale-102 
                            transition-all duration-300 flex overflow-hidden">

                {/* Texte à gauche */}
                <div className="flex-1 p-4 flex flex-col justify-center">
                    <h3 className="text-lg font-bold ml-5" style={{ fontFamily: "var(--font-inter)" }}>
                        {title}
                    </h3>
                    <p className="text-sm ml-5 text-gray-400 leading-6" style={{ fontFamily: "var(--font-inter)" }}>
                        {description}
                    </p>
                </div>

                {/* Image à droite avec fondu sur les bords */}
                <div className="w-1/2 h-full relative rounded-r-[20px] overflow-hidden">
                    <img src={imageSrc} alt="" className="w-full h-full object-cover" />
                    
                    {/* Overlay gradient à gauche */}
                    <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-black/50 to-transparent"></div>

                    {/* Overlay gradient sur les bords droits */}
                    <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-black/20 to-transparent"></div>

                    {/* Overlay gradient en bas */}
                    <div className="absolute bottom-0 left-0 h-8 w-full bg-gradient-to-t from-black/20 to-transparent"></div>

                    {/* Overlay gradient en haut */}
                    <div className="absolute top-0 left-0 h-8 w-full bg-gradient-to-b from-black/20 to-transparent"></div>
                </div>

            </div>
        </Link>
    );
}
