import Menu from "../app/components/acceuil/Menu";
import Presentation from "../app/components/acceuil/Presentation";
import FloatingImages from "../app/components/acceuil/FloatingImages"
import Figma from "./components/acceuil/Figma";
import Footer from "../app/components/acceuil/Footer";
import Education from "./components/acceuil/Education";
import FadeInOnScroll from "./components/FadeInScrollProps";
import MobileWarning from "./components/MobileWarning";
export default function Home() {
  const images = [
    "Paysage2.jpg", "Ville.jpg", "sport2.jpg", "voyage.jpg",
    "sport1.jpg", "Paysage5.jpg", "visite.jpg", "sport3.jpg", "Paysage.jpg",
  ];

  return (
    <>
      <MobileWarning>
        <section className="section-default">
          <Menu />
          <FadeInOnScroll>
            <Presentation />
          </FadeInOnScroll>

          <FloatingImages images={images} />

          <FadeInOnScroll>
            <Figma />
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div className="flex justify-between mt-40 ml-20 mr-20">
              <div>
                <img
                  src="/setup.jpg"
                  alt=""
                  className="h-[480px] w-[430px] rounded-[10px] cursor-pointer hover:scale-105 object-cover transition-tranform duration-300" />
              </div>
              <div>
                <Education />
                <a
                  href="https://drive.google.com/file/d/1gNwolmDhUZ3KaM2BtC4woMXu-OMBO-fI/view?usp=sharing"
                  download
                  className="w-[95%] mt-4 flex justify-center items-center gap-2 bg-[#252529] text-white px-5 py-2 rounded-[5px] hover:bg-[#252529]/60 transition-colors duration-300"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  <span>Télécharger le CV</span>
                  <span className="transform rotate-90">→</span>
                </a>
              </div>
            </div>
          </FadeInOnScroll>
          <Footer />

        </section>
      </MobileWarning>
    </>
  );
}
