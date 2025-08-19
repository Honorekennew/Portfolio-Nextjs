import Menu from "../components/acceuil/Menu";
import Footer from "../components/acceuil/Footer";
import Illustration from "../components/project/Illustration";
import ProjectCard from "../components/project/ProjetCard";
import ButtonAcceuil from "../components/ButtonAcceuil";
import FadeInOnScroll from "../components/FadeInScrollProps";
import MobileWarning from "../components/MobileWarning";

export default function Project() {
  const projets = [
    {
      imageSrc: "/IBA2.jpeg",
      title: "Iba channel",
      link: "https://github.com/Honorekennew/IbaChannel/tree/master",
      description:
        "Mobile application developed with React Native for a Cameroonian television channel specializing in economic and political news, allowing users to read published articles, filter content by category, watch replay shows via the YouTube API, and follow the channel live through a streaming feed, with integration of the official website’s API to fetch content.",
    },
    {
      imageSrc: "/Projet.jpeg",
      title: "FlixStore",
      link: "https://github.com/Honorekennew/FlixStore",
      description:
        "E-commerce web application for selling movies online, built with ASP.NET MVC and Entity Framework Core, featuring user authentication and authorization with ASP.NET Identity and intuitive user interfaces for browsing, purchasing, and managing films",
    },
    {
      imageSrc: "/Projet.jpeg",
      title: "Portfolio UI",
      link: "https://github.com/Honorekennew/Portfolio",
      description:
        "Personal portfolio built with React, Tailwind CSS, and Vite, delivering a modern and responsive user experience. Designed to showcase my skills, projects, and achievements with a clean, optimized interface that adapts seamlessly across all devices and ensures fast loading times.",
    },
  ];

  return (
    <>
      <MobileWarning>
        <section className="section-default relative">
          <FadeInOnScroll>
            <Menu />
            <Illustration />

            {projets.map((p, index) => (
              <ProjectCard key={index} {...p} />
            ))}
            <Footer />
            <ButtonAcceuil />
          </FadeInOnScroll>
        </section>
      </MobileWarning>
    </>
  );
}
