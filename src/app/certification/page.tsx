import Menu from "../components/acceuil/Menu";
import Footer from "../components/acceuil/Footer";
import ButtonAcceuil from "../components/ButtonAcceuil";
import Illustration from "../components/certification/Illustration";
import CertificationCard from "../components/certification/CertificationCard";

export default function Certification () {
    const certification = [
        {
            imageSrc: "/Udemy.jpeg",
            title: "ASP.NET CORE MVC | Build a Complete eCommerce App",
            link:"https://drive.google.com/file/d/1ZQ31uQCvngLOMvVIXrb3BjFWSyUmeAgC/view?usp=drive_link",
            description: "Practical skills acquired through a Udemy course, covering .NET MVC, Entity Framework Core, RESTful services, .NET Identity, PayPal integration, and Azure deployment.",
        },
    ]
    return (
        <section className="section-default relative">
            <Menu />
            <Illustration />
            {certification.map((p, index) => (
                <CertificationCard key={index} {...p} />
            ))}
            <ButtonAcceuil />
            <Footer />
        </section>
    );
}