"Use Client";
import Link from "next/link";
interface CertificationCardProps {
    imageSrc: string;
    title: string
    link: string;
    description: string;
}

export default function CertificationCard({ imageSrc, title, link, description }: CertificationCardProps) {
    return (
        <Link href={link} className="block mt-20 ml-20 hover:bg-[#252529] hover:rounded-[20px] hover:scale-103 transition-all duration-300 w-[50%] p-6 ">
            <div className="">
                <img
                    src={imageSrc}
                    alt=""
                    className="p-1 rounded-full bg-[#252529] object-cover"
                    style={{ width: 60, height: 60 }}
                />
            </div>
            <div className="mt-5">
                <span
                    className="text-2xl font-bold"
                    style={{ fontFamily: "var(--font-inter)" }}
                >
                    {title}
                </span>
                <p
                    className="text-gray-400 mt-2 leading-7"
                    style={{ fontFamily: "var(--font-inter)" }}
                >
                    {description}
                </p>
            </div>
        </Link>
    );

}