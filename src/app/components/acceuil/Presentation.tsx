export default function Presentation() {
  const socialLinks = [
    { icon: "linkdin.png", url: "https://www.linkedin.com/in/honore-kenne-72094928b/" },
    { icon: "Github.png", url: "https://github.com/honorekennew" },
    { icon: "Instagram.png", url: "https://www.instagram.com/honorekennew/" },
    { icon: "X.png", url: "https://x.com/HonoreKenneW" },
  ];

  return (
    <div className="mt-30 ml-20 flex items-start space-x-6">
      {/* <img
        src="/Firstpick2.jpg"
        alt="photo d'acceuil"
        className="rounded-[15px] w-[200px] h-[300px] object-cover cursor-pointer"
      /> */}
      <div>
        <div
          className="font-bold text-white text-6xl font-sans leading-14"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Hi, I&apos;m Honore KENNE <br /> but feel free to call me W
        </div>

        <div className="mt-6 flex space-x-2">
          {socialLinks.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`/${item.icon}`}
                alt={item.icon.replace(".png", "")}
                className="w-10 h-10 opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-300"
              />
            </a>
          ))}
        </div>

        <div
          className="mt-5 text-gray-300 text-base font-normal leading-7"
          style={{ maxWidth: "700px", fontFamily: "var(--font-inter)" }}
        >
          I&apos;m a Master&apos;s student in CTO & Tech Lead at{" "}
          <span className="font-bold text-white">HETIC</span>, passionate about
          everything related to front-end development, especially mobile. I love
          crafting clean interfaces and improving user experience through
          thoughtful design.
        </div>
      </div>
    </div>
  );
}
