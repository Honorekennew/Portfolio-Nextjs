import Link from "next/link";
export default function ButtonAcceuil () {
    return (
        <div className="fixed bottom-5 right-30">
        <Link
          href="/"
          className="flex items-center justify-center rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        > <img src="/logocircle.png" alt="Accueil" className="w-9 h-9 object-cover border-3 rounded-full border-[#18181B] hover:border-[#23A1B5]/70 hover:scale-105 transition-colors duration-300 " />
         
        </Link>
      </div>
    );
}