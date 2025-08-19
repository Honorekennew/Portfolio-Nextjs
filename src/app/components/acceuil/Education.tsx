export default function Education() {
  return (
    <div className="w-[95%] max-w-[450px] h-[420px] border border-white/5 rounded-[20px] p-5 flex flex-col justify-between overflow-hidden">
      <div>
        <div className="flex items-center space-x-4">
          <img src="/education.png" alt="Education" className="w-[50px] h-[50px]" />
          <section id="education">
            <span className="text-white font-medium text-lg" style={{ fontFamily: "var(--font-inter)" }}>
              Education
            </span>
          </section>
        </div>

        <div className="mt-0 ml-2 text-gray-300 text-base break-words">
          Parcours académique qui a façonné mon parcours en tant que développeur.
        </div>

        {/* Item HETIC */}
        <div className="flex items-center space-x-4 mt-8">
          <img src="hetic.jpeg" alt="HETIC" className="w-[40px] h-[40px] mt-2 rounded-full" />
          <div className="flex-1">
            <span
              className="text-gray-300 text-sm font-medium break-words"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              HETIC
            </span>
            <div className="flex justify-between text-gray-400 text-xs flex-wrap">
              <span className="break-words" style={{ fontFamily: "var(--font-inter)" }}>
                Master CTO et Tech Lead
              </span>
              <span style={{ fontFamily: "var(--font-inter)" }}>10/2025 - Present</span>
            </div>
          </div>
        </div>

        {/* Item INSTA */}
        <div className="flex items-center space-x-4 mt-8">
          <img src="insta.jpeg" alt="INSTA" className="w-[40px] h-[40px] mt-2 rounded-full" />
          <div className="flex-1">
            <span className="text-gray-300 text-sm font-medium break-words" style={{ fontFamily: "var(--font-inter)" }}>
              INSTA
            </span>
            <div className="flex justify-between text-gray-400 text-xs flex-wrap">
              <span className="w-[50%]" style={{ fontFamily: "var(--font-inter)" }}>
                Bachelor Concepteur Développeur d&apos;Applications
              </span>
              <span style={{ fontFamily: "var(--font-inter)" }}>09/2024 - 07/2025</span>
            </div>
          </div>
        </div>

        {/* Item IUC */}
        <div className="flex items-center space-x-4 mt-8">
          <img src="iuc.jpeg" alt="IUC" className="w-[40px] h-[40px] mt-2 rounded-full" />
          <div className="flex-1">
            <span className="text-gray-300 text-sm font-medium break-words" style={{ fontFamily: "var(--font-inter)" }}>
              IUC
            </span>
            <div className="flex justify-between text-gray-400 text-xs flex-wrap">
              <span className="w-[50%]" style={{ fontFamily: "var(--font-inter)" }}>
                DEC Programmation et Application Mobile
              </span>
              <span style={{ fontFamily: "var(--font-inter)" }}>10/2022 - 08/2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
