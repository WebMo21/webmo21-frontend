import React, { useState } from "react";

const ContactForm = ({ language }) => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [showInputErrorMessage, setShowInputErrorMessage] = useState(false);
  const [showEmailWasSentMessage, setShowEmailWasSentMessage] = useState(false);
  const [showEmailSentError, setShowEmailSentError] = useState(false);

  const sendEmail = (name, email, message) =>
    fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}`.substring(
        0,
        process.env.NEXT_PUBLIC_BACKEND_URL.length - 3
      ) + "/email",
      {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      }
    )
      .then((response) =>
        response
          .json()
          .then((data) => {
            if (data.message === "EMAIL SENT!") {
              setShowEmailWasSentMessage(true);
              setShowEmailSentError(false);
            } else {
              setShowEmailWasSentMessage(false);
              setShowEmailSentError(true);
            }
          })
          .catch((e) => console.log(e))
      )
      .catch((e) => console.log(e));

  const handleSendMessage = (name, email, message) => {
    if (
      name &&
      email &&
      message &&
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        String(email).toLowerCase()
      )
    ) {
      sendEmail(name, email, message);
      setShowInputErrorMessage(false);
    } else {
      setShowInputErrorMessage(true);
      setShowEmailWasSentMessage(false);
      setShowEmailSentError(false);
    }
  };

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
                    maxLength="50"
                    className="w-full px-3 py-3 text-sm text-black placeholder-gray-400 bg-white rounded shadow focus:outline-none focus:shadow-outline"
                    placeholder="Max Mustermann"
                    value={inputName}
                    onChange={(event) => setInputName(event.target.value)}
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
                    maxLength="250"
                    className="w-full px-3 py-3 text-sm text-black placeholder-gray-400 bg-white rounded shadow focus:outline-none focus:shadow-outline"
                    placeholder="max.mustermann@pm.me"
                    value={inputEmail}
                    onChange={(event) => setInputEmail(event.target.value)}
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
                    value={inputMessage}
                    onChange={(event) => setInputMessage(event.target.value)}
                    defaultValue={""}
                  />
                </div>
                <div className="mt-6 text-center">
                  <button
                    onClick={() => {
                      handleSendMessage(inputName, inputEmail, inputMessage);
                    }}
                    className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-gray-900 rounded shadow outline-none select-none active:bg-gray-700 hover:shadow-lg focus:outline-none"
                    type="button"
                    style={{ transition: "all 0.15s ease 0s" }}
                  >
                    {language === "DE" ? "Nachricht Senden" : "Send Message"}
                  </button>
                  {showInputErrorMessage ? (
                    <div className="mt-4 font-bold text-red-500">
                      {" "}
                      Die Eingaben sind nicht korrekt!
                    </div>
                  ) : (
                    ""
                  )}
                  {showEmailWasSentMessage ? (
                    <div className="w-full mt-4 font-bold text-green-500 bg-white rounded-sm">
                      {" "}
                      Die E-Mail wurde erfolgreich verschickt!
                    </div>
                  ) : (
                    ""
                  )}
                  {showEmailSentError ? (
                    <div className="font-bold text-red-500">
                      {" "}
                      Es gab einen Fehler beim Versand der E-Mail!
                    </div>
                  ) : (
                    ""
                  )}
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
