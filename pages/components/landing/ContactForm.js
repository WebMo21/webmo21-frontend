import React from "react";

const ContactForm = () => {
  return (
    <section className="relative block py-24 lg:pt-0 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
          <div className="w-full lg:w-6/12 px-4">
            <div
              className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300"
              data-aos="fade-up-right"
            >
              <div className="flex-auto p-5 lg:p-10 bg-green-500 text-white rounded-md">
                <h4 className="text-2xl font-semibold select-none">Kontakt aufnehmen</h4>
                <p className="leading-relaxed mt-1 mb-4 select-none">
                  Wir versuchen dir innerhalb von 24 Stunden zu antworten.
                </p>
                <div className="relative w-full mb-3 mt-8">
                  <label
                    className="block uppercase text-xs font-bold mb-2 select-none"
                    htmlFor="full-name"
                  >
                    Vollständiger Name
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full text-black"
                    placeholder="Max Mustermann"
                    style={{ transition: "all 0.15s ease 0s" }}
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-xs font-bold mb-2 select-none"
                    htmlFor="email"
                  >
                    E-Mail-Adresse
                  </label>
                  <input
                    type="email"
                    className="px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full text-black"
                    placeholder="max.mustermann@pm.me"
                    style={{ transition: "all 0.15s ease 0s" }}
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-xs font-bold mb-2 select-none"
                    htmlFor="message"
                  >
                    Nachricht
                  </label>
                  <textarea
                    rows={4}
                    cols={80}
                    style={{ resize: "none" }}
                    className="px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full text-black"
                    placeholder="Hier steht deine Nachricht..."
                    defaultValue={""}
                  />
                </div>
                <div className="text-center mt-6">
                  <button
                    className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 select-none"
                    type="button"
                    style={{ transition: "all 0.15s ease 0s" }}
                  >
                    Nachricht Senden
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
