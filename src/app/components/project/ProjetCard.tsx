"use client";

import Link from "next/link";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  link: string;
  description: string;
}

export default function ProjectCard({ imageSrc, title, link, description }: ProjectCardProps) {
  return (
    <Link href={link} className="block">
      <div className="mt-15 ml-20 rounded-[20px] border border-white/10 p-6 w-[85%] h-[240px]
                      cursor-pointer 
                      hover:border-[#23A1B5]/20 
                      hover:scale-102 
                      transition-all duration-300">

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              src={imageSrc}
              alt={title}
              className="p-1 rounded-full bg-[#252529]"
              style={{ width: 60, height: 60 }}
            />
            <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-inter)" }}>
              {title}
            </span>
          </div>

          <div className="w-15 h-15">
            <img
              src="/lien.png"
              alt=""
              className="w-full h-full transition-transform duration-300 hover:opacity-70 hover:scale-110"
            />
          </div>
        </div>

        <div
          className="mt-5 ml-2 text-gray-300 text-base w-[97%] leading-7 text-gray-400"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {description}
        </div>
      </div>
    </Link>
  );
}
