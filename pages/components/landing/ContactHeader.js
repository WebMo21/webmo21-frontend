import React from "react";

const ContactHeader = ({ language }) => {
  return (
    <section className="relative block pb-20 text-white bg-black">
      <div
        className="absolute top-0 left-0 right-0 bottom-auto w-full -mt-20 overflow-hidden pointer-events-none"
        style={{ height: 80, transform: "translateZ(0px)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x={0}
          y={0}
        >
          <polygon points="2560 0 2560 100 0 100" />
        </svg>
      </div>
      <div className="container px-4 pt-20 pb-20 mx-auto lg:pt-24 lg:pb-64">
        <div className="flex flex-wrap justify-center text-center">
          <div className="w-full px-4 lg:w-6/12">
            <h2 className="text-4xl font-semibold text-white uppercase select-none">
              {language === "DE" ? "Schreib Uns" : "Contact Us"}
            </h2>
            <p className="mt-4 mb-4 text-lg leading-relaxed select-none">
              {language === "DE"
                ? "Wir beantworten gern deine Fragen oder Hinweise zu Fitness Time."
                : "We will be happy to answer any questions or comments you may have about Fitness Time."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeader;
