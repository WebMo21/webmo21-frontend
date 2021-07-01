import React, { useState, useEffect } from "react";
import { signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";

const SettingsSection = ({ language }) => {
  const router = useRouter();
  const [session, loading] = useSession();
  const [nameOfUser, setNameOfUser] = useState("");
  const [genderOfUser, setGenderOfUser] = useState("");

  useEffect(() => {
    if (session) {
      setNameOfUser(session.user?.name);
      setGenderOfUser(session.user?.gender);
    }
  }, []);

  const saveUserUpdated = (id, name, gender) => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}` + `/users/`, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        name: name,
        gender: gender,
      }),
    })
      .then((response) =>
        response
          .json()
          .then(() => {
            router.push("/");
            setTimeout(function () {
              signOut();
            }, 600);
          })
          .catch((e) => console.log(e))
      )
      .catch((e) => console.log(e));
  };

  return (
    <div className="pb-8 bg-gray-900" data-aos="fade-up">
      <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
        <h2 className="max-w-6xl pl-1 mx-auto mt-8 text-2xl font-medium leading-6 text-white select-none">
          {language === "DE" ? "Deine Einstellungen" : "Your Settings"}
        </h2>
        <div className="justify-center p-8 py-6 mt-5 bg-gray-700 rounded-lg md:flex">
          <div className="flex-col cursor-pointer">
            <div className="mb-4">
              <div className="flex-col">
                <div className="mb-2 text-xl text-center text-white">
                  {language === "DE" ? "Mein Name lautet:" : "My name is:"}
                </div>
                <input
                  value={nameOfUser}
                  type="text"
                  id="name-of-user"
                  maxLength="18"
                  onChange={(event) => setNameOfUser(event.target.value)}
                  className="border !bg-gray-600 border-transparent text-3xl font-bold !text-green-500 select-none w-96 rounded-md placeholder-green-700 text-center"
                />
              </div>
            </div>
            <div className="mb-2 text-xl text-center text-white">
              {language === "DE" ? "Mein Geschlecht ist:" : "My gender is:"}
            </div>
            <div className="flex justify-center pt-2 ml-4">
              <div>
                <a
                  onClick={() => setGenderOfUser("woman")}
                  className={`p-2 font-semibold text-white ${
                    genderOfUser === "woman"
                      ? "bg-pink-500 hover:bg-pink-400"
                      : "bg-pink-200 hover:bg-pink-100"
                  } border border-transparent border-green-500 rounded cursor-pointer select-none`}
                >
                  {language && language === "DE" ? "♀️ Weiblich" : "♀️ Female"}
                </a>
              </div>
              <div>
                {" "}
                <a
                  onClick={() => setGenderOfUser("man")}
                  className={`p-2 ml-5 font-semibold text-white ${
                    genderOfUser === "man"
                      ? "bg-blue-500 hover:bg-blue-400"
                      : "bg-blue-200 hover:bg-blue-100"
                  }  border border-transparent border-green-500 rounded cursor-pointer select-none`}
                >
                  {language && language === "DE" ? "♂️ Männlich" : "♂️ Male"}
                </a>
              </div>
            </div>

            <button
              type="button"
              className="inline-flex justify-center w-full px-4 py-2 mt-12 text-base font-medium text-white bg-green-500 border border-transparent rounded-md shadow-sm select-none hover:bg-green-400 sm:col-start-2 sm:text-sm focus:outline-none"
              onClick={() => {
                saveUserUpdated(session.user.id, nameOfUser, genderOfUser);
              }}
            >
              {language === "DE" ? "Speichern" : "Save"}
            </button>
            <div className="mb-2 text-center text-gray-400 text-md">
              {language === "DE"
                ? "Für den Prozess des Speicherns wirst du ausgeloggt!"
                : "For the saving process you will be logged out!"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsSection;
