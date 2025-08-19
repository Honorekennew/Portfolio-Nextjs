"use client";

interface ExperienceCardProps {
    imageSrc: string;
    date: string;
    title: string;
    poste: string;
    description: string;
}
export default function ExperienceCard ({imageSrc, date, title, poste, description} : ExperienceCardProps) {
    return(
        <div className="mt-10 hover:bg-[#252529] rounded-[15px] transition-colors duration-200 cursor-pointer p-8">
            <div>
                <img src={imageSrc}
                 alt="image"
                 className="p-1 rounded-full bg-[#252529] object-cover"
                 style={{width:60, height:60,}}
                  />
            </div>
            <div className="flex justify-between items-center w-[95%] mt-5">
                <div>
                    <span className="font-bold text-1xl" style={{fontFamily: "var(--font-inter)"}}>{title}</span>
                </div>
                <div>
                    <span className="text-gray-400 text-sm" style={{fontFamily: "var(--font-inter)"}}>{date}</span>
                </div>
            </div>
            <div>
            <div>
                <span className="text-gray-400 text-sm" style={{fontFamily: "var(--font-inter)"}}>{poste}</span>
            </div>
            <div className="w-[95%] leading-8 text-gray-400 mt-5 " style={{fontFamily: "var(--font-inter)"}}>{description}</div>
            </div>
        </div>
    );
}