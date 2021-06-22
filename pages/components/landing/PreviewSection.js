import React from "react";

const PreviewSection = () => {
  return (
    <section className="pt-20 pb-48">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-center mb-24 text-center">
          <div className="w-full px-4 lg:w-6/12">
            <h2 className="text-4xl font-semibold uppercase select-none">
              Pläne wie von Selbst
            </h2>
            <p className="m-4 text-lg leading-relaxed select-none">
              Unsere Trainingspläne erinnern dich stetig daran deinem Körper
              etwas Gutes zu tun. Nutze die Features von Fitness Time um im
              Handumdrehen deinen Traumkörper zu erreichen.
            </p>
          </div>
        </div>
        {/* Trainer Card Wrapper */}
        <div className="flex flex-wrap">
          {/* Card 1 */}
          <div
            className="w-full px-4 mb-12 md:w-4/12 lg:mb-0"
            data-aos="flip-right"
          >
            <div className="px-6 transition duration-500 ease-in transform hover:scale-110">
              <img
                alt="..."
                src="./inspiration-exercise2.png"
                className="mx-auto rounded rounded-md shadow-lg h-30 w-30"
                style={{ maxWidth: 250 }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold select-none">
                  Eigene Übungen
                </h5>
                <p className="mt-1 text-sm font-semibold text-gray-500 uppercase select-none">
                  Weil Training Indivduell ist
                </p>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div
            className="w-full px-4 mb-12 md:w-4/12 lg:mb-0"
            data-aos="flip-right"
          >
            <div className="px-6 transition duration-500 ease-in transform hover:scale-110">
              <img
                alt="..."
                src="./inspiration-plan2.png"
                className="max-w-full mx-auto rounded rounded-md shadow-lg"
                style={{ maxWidth: 250 }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold select-none">Eigene Pläne</h5>
                <p className="mt-1 text-sm font-semibold text-gray-500 uppercase select-none">
                  Modern mit Drag & Drop
                </p>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div
            className="w-full px-4 mb-12 md:w-4/12 lg:mb-0"
            data-aos="flip-right"
          >
            <div className="px-6 transition duration-500 ease-in transform hover:scale-110">
              <img
                alt="..."
                src="./inspiration-overview2.png"
                className="max-w-full mx-auto rounded rounded-md shadow-lg"
                style={{ maxWidth: 250 }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold select-none">
                  Eigene Übersicht
                </h5>
                <p className="mt-1 text-sm font-semibold text-gray-500 uppercase select-none">
                  Verliere dein Ziel Nie aus den Augen
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;
