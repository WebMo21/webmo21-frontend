import React from "react";

const TrainingStartSection = ({ language }) => {
  return (
    <div className="pb-8 bg-gray-900" data-aos="fade-up">
      <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
        <h2 className="max-w-6xl pl-1 mx-auto mt-8 text-2xl font-medium leading-6 text-white select-none">
          {language === "DE"
            ? "Start dein Training jetzt!"
            : "Start Your Training Now!"}
        </h2>
        <div className="justify-center p-8 py-6 mt-5 bg-gray-700 rounded-lg md:flex">
          <div className="flex-col">
            <div className="mb-5">
              <div className="flex-col">
                <div className="mb-2 text-xl font-bold text-center text-green-500 select-none">
                  {language === "DE"
                    ? "Bald kannst du dein Training in der App starten und überwachen"
                    : "Soon you can start and keep track of your training within the app"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingStartSection;
