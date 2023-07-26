import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Abir Dey
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Data Scientist & Web Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
      I am a B. tech candidate in Computer Science and Engineering at Vellore Institute of Technology, Bhopal, India specializing on Artificial Intelligence and Machine Learning. My work focuses towards addressing the lack of AI based service provision for the improvement of quality of life and workflow in various fields such as Healthcare Informatics , Finance and Sports analytics. To know more, visit Abir Dey's Github page{" "}
        <a
          href="https://github.com/AbirDey2002"
          target="_blank"
          className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
          rel="noreferrer noopener"
        >
          Abir's
        </a>{" "}
        Github page
      </p>
    </div>
  );
}

export default Intro;
