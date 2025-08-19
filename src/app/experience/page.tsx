import Footer from "../components/acceuil/Footer";
import Menu from "../components/acceuil/Menu";
import ButtonAcceuil from "../components/ButtonAcceuil";
import ExperienceCard from "../components/experience/ExperienceCard";
import Illustration from "../components/experience/Illustration";
import FadeInOnScroll from "../components/FadeInScrollProps";
import MobileWarning from "../components/MobileWarning";

export default function Experience() {
    const experience = [
        {
            imageSrc: "/digiplome.jpeg",
            date: "04/25 - 07/25",
            title: "Digiplome",
            poste: "FullStack Developer",
            description: "Developed an e-commerce web application for selling movies online using ASP.NET MVC and EntityFramework Core. Implemented user authentication and authorization with ASP.NET Identity to ensure secure access. Designed and built intuitive user interfaces for browsing, purchasing, and managing films, providing a seamless and engaging customer experience."
        },
        {
            imageSrc: "/MediaPress.jpeg",
            date: "05/24 - 12/24",
            title: "Media Press Africa",
            poste: "Frontend Developer",
            description: "Designed and developed a mobile application for a Cameroonian television channel specializing in economic and political news. The app allows users to read articles, filter content by category, watch replay shows via the YouTube API, and follow the channel live through a streaming feed.Responsible for requirements analysis, technical design, development, and integration of RESTful APIs to ensure seamless communication between the mobile app and the official channel website."
        },
        {
            imageSrc: "/Work.jpeg",
            date: "07/23 - 02/24",
            title: "Tec Alpha",
            poste: "Frontend Developer",
            description: "Responsible for designing and developing a personal financial management mobile application. Designed and developed the user interface for a smooth and intuitive experience, and integrated APIs for transaction and financial data management."
        },
    ]
    return (
        <>
            <MobileWarning>
                <section className="section-default relative">
                    <FadeInOnScroll>
                        <Menu />
                        <Illustration />
                        <div className="grid grid-cols-2 ml-20">
                            {experience.map((e, index) => (
                                <ExperienceCard key={index} {...e} />
                            ))}
                        </div>
                        <Footer />
                        <ButtonAcceuil />
                    </FadeInOnScroll>
                </section>
            </MobileWarning>
        </>
    );
}