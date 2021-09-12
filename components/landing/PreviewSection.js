import React from "react";

const PreviewSection = ({ language }) => {
  return (
    <section className="pt-20 pb-48">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-center mb-24 text-center">
          <div className="w-full px-4 lg:w-6/12">
            <h2 className="text-4xl font-semibold uppercase select-none">
              {language === "DE" ? "Pläne wie von Selbst" : "Plans like magic"}
            </h2>
            <p className="m-4 text-lg leading-relaxed select-none">
              {language === "DE"
                ? "Unsere Trainingspläne erinnern dich stetig daran deinem Körper etwas Gutes zu tun. Nutze die Features von Fitness Time um deinen Traumkörper zu erreichen."
                : "Our training plans constantly remind you to do your body something good for yourself. Use the features of Fitness Time to achieve your dream body in no time."}
            </p>
          </div>
        </div>
        {/* Preview Images */}
        <div className="flex flex-wrap">
          {/* Image 1 */}
          <div
            className="w-full px-4 mb-12 md:w-4/12 lg:mb-0"
            data-aos="flip-right"
          >
            <div className="px-6 transition duration-500 ease-in transform hover:scale-110">
              <img
                alt="Preview Of Fitness Time Custom Workout Feature"
                src="/inspiration-exercise.png"
                className="mx-auto rounded-md shadow-lg h-30 w-30"
                style={{ maxWidth: 250 }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold select-none">
                  {language === "DE" ? "Eigene Übungen" : "Cusom Workouts"}
                </h5>
                <p className="mt-1 text-sm font-semibold text-gray-500 uppercase select-none">
                  {language === "DE"
                    ? "Weil Training Individuell ist"
                    : "Because training is individual"}
                </p>
              </div>
            </div>
          </div>
          {/* Image 2 */}
          <div
            className="w-full px-4 mb-12 md:w-4/12 lg:mb-0"
            data-aos="flip-right"
          >
            <div className="px-6 transition duration-500 ease-in transform hover:scale-110">
              <img
                alt="Preview Of Fitness Time Modern Drag & Drop Calendar Feature"
                src="/inspiration-plan.png"
                className="max-w-full mx-auto rounded-md shadow-lg"
                style={{ maxWidth: 250 }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold select-none">
                  {language === "DE" ? "Eigene Pläne" : "Custom Plans"}
                </h5>
                <p className="mt-1 text-sm font-semibold text-gray-500 uppercase select-none">
                  {language === "DE"
                    ? "Modern mit Kalenderübersicht"
                    : "Modern with Calendar View"}
                </p>
              </div>
            </div>
          </div>
          {/* Image 3 */}
          <div
            className="w-full px-4 mb-12 md:w-4/12 lg:mb-0"
            data-aos="flip-right"
          >
            <div className="px-6 transition duration-500 ease-in transform hover:scale-110">
              <img
                alt="Preview Of Fitness Time Training Overview Feature"
                src="/inspiration-overview.png"
                className="max-w-full mx-auto rounded-md shadow-lg"
                style={{ maxWidth: 250 }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold select-none">
                  {language === "DE" ? "Eigene Übersicht" : "Custom Overview"}
                </h5>
                <p className="mt-1 text-sm font-semibold text-gray-500 uppercase select-none">
                  {language === "DE"
                    ? "Verliere dein Ziel Nie aus den Augen"
                    : "Never lose sight of your goal"}
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
