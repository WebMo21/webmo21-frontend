import React from "react";

const PreviewSection = () => {
  return (
    <section className="pt-20 pb-48">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold uppercase">
              Pläne wie von Selbst
            </h2>
            <p className="text-lg leading-relaxed m-4">
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
            className="w-full md:w-4/12 lg:mb-0 mb-12 px-4"
            data-aos="flip-right"
          >
            <div className="px-6 hover:scale-110 transform transition ease-in duration-500">
              <img
                alt="..."
                src="./inspiration-exercise2.png"
                className="shadow-lg rounded h-30 w-30 mx-auto rounded-md"
                style={{ maxWidth: 250 }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Eigene Übungen</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Weil Training Indivduell ist
                </p>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div
            className="w-full md:w-4/12 lg:mb-0 mb-12 px-4"
            data-aos="flip-right"
          >
            <div className="px-6 hover:scale-110 transform transition ease-in duration-500">
              <img
                alt="..."
                src="./inspiration-plan2.png"
                className="shadow-lg rounded max-w-full mx-auto rounded-md"
                style={{ maxWidth: 250 }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Eigene Pläne</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Modern mit Drag & Drop
                </p>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div
            className="w-full md:w-4/12 lg:mb-0 mb-12 px-4"
            data-aos="flip-right"
          >
            <div className="px-6 hover:scale-110 transform transition ease-in duration-500">
              <img
                alt="..."
                src="./inspiration-overview2.png"
                className="shadow-lg rounded max-w-full mx-auto rounded-md"
                style={{ maxWidth: 250 }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Eigene Übersicht</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
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
