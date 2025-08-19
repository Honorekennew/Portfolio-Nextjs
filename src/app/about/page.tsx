import Menu from "../components/acceuil/Menu";
import Footer from "../components/acceuil/Footer";
import SocialMedia from "../components/about/SocialMedia";
import Presentation from "../components/about/Presentation";
import ButtonAcceuil from "../components/ButtonAcceuil";
import FadeInOnScroll from "../components/FadeInScrollProps";
import MobileWarning from "../components/MobileWarning";

export default function About() {
    return (
        <>
            <MobileWarning>
                <section className="section-default">
                    <FadeInOnScroll>
                        <Menu />
                        <SocialMedia />
                        <Presentation />
                        <Footer />
                        <ButtonAcceuil />
                    </FadeInOnScroll>
                </section>
            </MobileWarning>
        </>
    );
}
