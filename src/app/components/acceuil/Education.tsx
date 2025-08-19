export default function Education() {
  return (
    <div className="w-[95%] h-[420px] border border-white/5 rounded-[20px] p-5 flex flex-col justify-between">
      <div>
        <div className="flex items-center space-x-4">
          <img src="/education.png" alt="Education" style={{ width: 50, height: 50, }} />
          <section id="education">
            <span className="text-white font-medium text-lg" style={{ fontFamily: "var(--font-inter)" }}>
              Education
            </span>
          </section>
        </div>
        <div className="mt-0 ml-2 text-gray-300 text-base">
          Academic path that shaped my journey as a developer.
        </div>


        <div className="flex items-center space-x-4">
          <img src="hetic.jpeg" alt="HETIC" className="mt-10 ml-2 rounded-full" style={{ width: 40, height: 40 }} />
          <div className="mt-9">
            <span className="text-gray-300 text-sm font-medium" style={{ fontFamily: "var(--font-inter)" }}>HETIC</span>
            <div className="flex justify-between w-[300px] text-gray-400 text-xs">
              <span style={{ fontFamily: "var(--font-inter)" }}>Master CTO et Tech Lead</span>
              <span className="ml-4" style={{ fontFamily: "var(--font-inter)" }}>10/2025 - Present</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4 mt-[-10px]">
          <img src="insta.jpeg" alt="INSTA" className="mt-10 ml-2 rounded-full" style={{ width: 40, height: 40 }} />
          <div className="mt-9">
            <span className="text-gray-300 text-sm font-medium" style={{ fontFamily: "var(--font-inter)" }}>INSTA</span>
            <div className="flex justify-between w-[300px] text-gray-400 text-xs">
              <span className="w-[50%]" style={{ fontFamily: "var(--font-inter)" }}>Bachelor Concepteur Développeur d'Applications</span>
              <span className="ml-4" style={{ fontFamily: "var(--font-inter)" }}>09/2024 - 07/2025</span>
            </div>
          </div>
        </div>


        <div className="flex items-center space-x-4 mt-[-10px]">
          <img src="iuc.jpeg" alt="IUC" className="mt-10 ml-2 rounded-full" style={{ width: 40, height: 40 }} />
          <div className="mt-9">
            <span className="text-gray-300 text-sm font-medium" style={{ fontFamily: "var(--font-inter)" }}>IUC</span>
            <div className="flex justify-between w-[300px] text-gray-400 text-xs">
              <span className="w-[50%]" style={{ fontFamily: "var(--font-inter)" }}>DEC Programmation et Application Mobile</span>
              <span className="ml-4" style={{ fontFamily: "var(--font-inter)" }}>10/2022 - 08/2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}