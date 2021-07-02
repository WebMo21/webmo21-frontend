import React from "react";

const ContactForm = ({ language }) => {
  return (
    <section className="relative block py-24 bg-black lg:pt-0">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-center -mt-48 lg:-mt-64">
          <div className="w-full px-4 lg:w-6/12">
            <div
              className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-gray-300 rounded-lg shadow-lg"
              data-aos="fade-up-right"
            >
              <div className="flex-auto p-5 text-white bg-green-500 rounded-md lg:p-10">
                <h4 className="text-2xl font-semibold select-none">
                  {language === "DE" ? "Kontakt aufnehmen" : "Contact Us"}
                </h4>
                <p className="mt-1 mb-4 leading-relaxed select-none">
                  {language === "DE"
                    ? "Wir versuchen dir innerhalb von 24 Stunden zu antworten."
                    : "We will try to answer you within 24 hours."}
                </p>
                <div className="relative w-full mt-8 mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase select-none"
                    htmlFor="full-name"
                  >
                    {language === "DE" ? "Vollständiger Name" : "Full Name"}
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-3 text-sm text-black placeholder-gray-400 bg-white rounded shadow focus:outline-none focus:shadow-outline"
                    placeholder="Max Mustermann"
                    style={{ transition: "all 0.15s ease 0s" }}
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase select-none"
                    htmlFor="email"
                  >
                    {language === "DE" ? "E-Mail-Adresse" : "Email"}
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-3 text-sm text-black placeholder-gray-400 bg-white rounded shadow focus:outline-none focus:shadow-outline"
                    placeholder="max.mustermann@pm.me"
                    style={{ transition: "all 0.15s ease 0s" }}
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase select-none"
                    htmlFor="message"
                  >
                    {language === "DE" ? "Nachricht" : "Message"}
                  </label>
                  <textarea
                    rows={4}
                    cols={80}
                    style={{ resize: "none" }}
                    className="w-full px-3 py-3 text-sm text-black placeholder-gray-400 bg-white rounded shadow focus:outline-none focus:shadow-outline"
                    placeholder={
                      language === "DE"
                        ? "Hier steht deine Nachricht..."
                        : "Your message here..."
                    }
                    defaultValue={""}
                  />
                </div>
                <div className="mt-6 text-center">
                  <button
                    className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-gray-900 rounded shadow outline-none select-none active:bg-gray-700 hover:shadow-lg focus:outline-none"
                    type="button"
                    style={{ transition: "all 0.15s ease 0s" }}
                  >
                    {language === "DE" ? "Nachricht Senden" : "Send Message"}
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