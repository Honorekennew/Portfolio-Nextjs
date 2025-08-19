export default function Presentation () {
    return (
        <div>
                <div className="font-bold text-white text-4xl font-sans leading-12 mt-15 ml-20" style={{ fontFamily: "var(--font-inter)" }}>
                    <span>
                        I&apos;m Honore KENNE based in Paris, <br />
                        France
                    </span>
                </div>
                <div className="ml-20 mt-2 text-gray-400 w-[90%] leading-7" style={{ fontFamily: "var(--font-inter)" }}>
                    As a student at HETIC pursuing a Master’s in CTO and Tech Lead, I am part of a program strongly focused on
                    project-based learning. I am passionate about frontend mobile development and designing with Figma.
                    With solid experience in the JavaScript ecosystem and React technologies in particular, I am familiar
                    with agile methodologies and have a good command of backend technologies, DevOps tools and
                    practices, as well as SQL databases.
                </div>

                <div className="flex justify-between mt-30 ml-20 mr-20 w-[85%]">
                    <div className="w-[50%] leading-7 text-gray-400">
                        I design and optimize user interfaces for various learning
                        projects using React Native and Expo. I regularly create
                        web and mobile interfaces with Figma, which helps me
                        sharpen my design skills.

                        <div className="mt-10 leading-7 text-gray-400">
                            Always eager to connect and collaborate with colleagues
                            and professionals, feel free to reach out for more
                            information!
                        </div>
                    </div>
                    <div>
                        <video
                            src="/Second2.mp4"
                            className="w-[400px] h-[400px] rounded-[15px] object-cover cursor-pointer transform rotate-5 shadow-lg"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </div>
                </div>

                <a
                    href="mailto:kennewhonore0@icloud.com"
                    className="mt-20 ml-20 text-[#23A1B5] cursor-pointer hover:opacity-90 "
                    style={{ fontFamily: "var(--font-inter)" }}
                >
                    Contact me by email
                </a>
            </div>
    );
}
