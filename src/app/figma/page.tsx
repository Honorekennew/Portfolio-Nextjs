import Footer from "../components/acceuil/Footer";
import Menu from "../components/acceuil/Menu";
import ButtonAcceuil from "../components/ButtonAcceuil";
import FadeInOnScroll from "../components/FadeInScrollProps";
import Illustration from "../components/Figma/Illustration";
import FigmaCard from "../components/Figma/FigmaCard";
import MobileWarning from "../components/MobileWarning";

export default function Figma() {
    const figma = [
        {
            imageSrc: "/Figma1.png",
            title: "Portfolio UI",
            link: "https://www.figma.com/design/a7BlMlrz5yweJSUhZcVr9u/Untitled?node-id=0-1&t=CvFYnPRXUxWltjDg-1",
            description: "Designed a clean and modern portfolio layout using Figma to showcase personal projects and skills."
        },
        {
            imageSrc: "/Figma5.png",
            title: "Schedule web UI",
            link: "https://www.figma.com/design/IaRKoHSFUmK5YE2kMiF1Lc/Untitled?node-id=0-1&t=aldGdV5YHNMI4Ni4-1",
            description: "Designed a user-friendly web application in Figma for seamless appointment booking, with a focus on clarity and intuitive workflows."
        },
        {
            imageSrc: "/Figma3.png",
            title: "Iba Channel mobile UI",
            link: "https://www.figma.com/design/ax3st8f8YmCo2LOSkoY9q9/Untitled?node-id=0-1&t=zmr2Hu1HCi24SGti-1",
            description: "Created a visually engaging and modern TV channel interface in Figma, focusing on user experience and intuitive navigation."
        },

        {
            imageSrc: "/Figma2.png",
            title: "AirPods UI",
            link: "https://www.figma.com/design/3xjZL9ezdx38IbnWZdC0Wk/Untitled?node-id=0-1&t=p4hzsKQafFquxS4J-1",
            description: "Designed a sleek and modern product showcase layout in Figma to highlight AirPods features and design details."
        },
        {
            imageSrc: "/Figma7.png",
            title: "AirPods Max UI",
            link: "https://www.figma.com/design/pUcqG6Zl4wPsD89syNj6Gk/Untitled?node-id=0-1&t=UBo55IH3yxQgLoKg-1",
            description: "Designed a modern and elegant concept for AirPods Max in Figma."
        },
        {
            imageSrc: "/Figma6.png",
            title: "FruitFizz UI",
            link: "https://www.figma.com/design/LQiGDb3VdfnUFlkVdXrQxC/Untitled?node-id=0-1&t=OpDsW6FBEvN93jGG-1",
            description: "Created a playful and colorful fruit can design in Figma, experimenting with branding and visual identity just for fun."
        },
        {
            imageSrc: "/Figma8.png",
            title: "Nike UI",
            link: "https://www.figma.com/design/pfyG1z2aZ0Zp5Yd56OPNun/Untitled?node-id=0-1&t=RYJDylvuW4qR6FVS-1",
            description: "Created a sleek and dynamic Nike design concept in Figma, exploring branding and visual identity with a modern touch."
        },
    ]
    return (
        <>
            <MobileWarning>
                <section className="section-default relative">
                    <FadeInOnScroll>
                        <Menu />
                        <Illustration />
                        {figma.map((f, index) => (
                            <FigmaCard key={index} {...f} />
                        ))}
                        <Footer />
                        <ButtonAcceuil />
                    </FadeInOnScroll>
                </section>
            </MobileWarning>
        </>
    );
}