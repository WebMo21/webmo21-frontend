import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import { Dialog, Transition } from "@headlessui/react";

const ChangeUserPictureModal = ({
  id,
  image,
  name,
  gender,
  showOnboardingModal,
  language,
}) => {
  const router = useRouter();
  const [nameInput, setNameInput] = useState(name);
  const [pictureInput, setPictureInput] = useState(image);
  const [genderInput, setGenderInput] = useState(gender);
  const [showUpdateError, setShowUpdateError] = useState(false);

  const saveUserUpdated = (id, name, image, gender) =>
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}` + `/users/`, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        name: name,
        image: image,
        gender: gender,
      }),
    })
      .then((response) =>
        response
          .json()
          .then(() => router.push("/auth/logout"))
          .catch((e) => console.log(e))
      )
      .catch((e) => console.log(e));

  return (
    <Transition.Root
      show={showOnboardingModal ? showOnboardingModal : false}
      as={Fragment}
    >
      <Dialog
        as="div"
        static
        className="fixed inset-0 z-50 overflow-y-auto"
        open={showOnboardingModal}
      >
        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-95" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-gray-800 rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6 iphone:mt-4"
              data-aos="fade-in"
            >
              <div>
                <div className="block mb-4 text-2xl font-medium text-center text-green-500 select-none iphone:!text-xl">
                  {language === "DE"
                    ? "Willkommen bei Fitness Time!"
                    : "Welcome to Fitness Time"}
                </div>
                <div className="block mx-16 iphone:mx-2 mb-4 font-medium text-justify text-gray-400 select-none text-md iphone:!text-center">
                  {language === "DE"
                    ? "Bevor es so richtig losgeht benötigen wir noch wenige Informationen über dich, um dir ein optimales Trainingserlebnis zu garantieren."
                    : "Before we get started, we need a little information about you to ensure you have the best training experience possible."}
                </div>
                <img
                  className="w-20 h-20 mx-auto mt-6 mb-2 rounded-full select-none image-main"
                  src={pictureInput ? pictureInput : "/icons/change-image.png"}
                  alt="Fitness Time User Avatar"
                />
                <div
                  htmlFor="price"
                  className="block mb-4 text-xl font-medium text-center text-gray-200 select-none"
                >
                  {language === "DE"
                    ? "URL zu deinem Profilbild"
                    : "URL to your profile picture"}
                </div>
                <input
                  value={pictureInput}
                  type="text"
                  id="picture-of-user"
                  onChange={(event) => setPictureInput(event.target.value)}
                  className="border !bg-gray-600 border-transparent text-2xl font-bold !text-green-500 select-none w-full rounded-md placeholder-green-700 text-center iphone:!text-base  mx-auto"
                />
                <div
                  htmlFor="price"
                  className="block mt-4 mb-4 text-xl font-medium text-center text-gray-200 select-none"
                >
                  {language === "DE" ? "Dein Name" : "Your Name"}
                </div>
                <input
                  value={nameInput}
                  type="text"
                  maxLength="18"
                  id="name-of-user"
                  onChange={(event) => setNameInput(event.target.value)}
                  className="border !bg-gray-600 border-transparent text-2xl font-bold !text-green-500 select-none w-full rounded-md placeholder-green-700 text-center iphone:!text-base mx-auto"
                />
                <div
                  htmlFor="price"
                  className="block mt-4 mb-4 text-xl font-medium text-center text-gray-200 select-none"
                >
                  {language === "DE" ? "Dein Geschlecht" : "Your Gender"}
                </div>
                <div className="flex justify-center pt-2 ml-4">
                  <div>
                    <a
                      onClick={() => setGenderInput("woman")}
                      className={`p-2 font-semibold text-white ${
                        genderInput !== "woman" && genderInput !== "man"
                          ? "bg-gray-600 hover:bg-pink-500/75"
                          : genderInput === "woman"
                          ? "bg-pink-500 hover:bg-pink-400"
                          : "bg-gray-600 hover:bg-gray-500"
                      } border border-transparent border-green-500 rounded cursor-pointer select-none`}
                    >
                      {language && language === "DE"
                        ? "♀️ Weiblich"
                        : "♀️ Female"}
                    </a>
                  </div>
                  <div>
                    <a
                      onClick={() => setGenderInput("man")}
                      className={`p-2 ml-5 font-semibold text-white ${
                        genderInput !== "woman" && genderInput !== "man"
                          ? "bg-gray-600 hover:bg-blue-400/75"
                          : genderInput === "man"
                          ? "bg-blue-500 hover:bg-blue-400"
                          : "bg-gray-600 hover:bg-gray-500"
                      }  border border-transparent border-green-500 rounded cursor-pointer select-none`}
                    >
                      {language && language === "DE"
                        ? "♂️ Männlich"
                        : "♂️ Male"}
                    </a>
                  </div>
                </div>
                {showUpdateError ? (
                  <div className="mt-4 text-center text-red-500">
                    {language === "DE"
                      ? "Bitte gebe deine Bild-URL, deinen Namen und Geschlecht an!"
                      : "Please provide your picture URL, your name and gender!"}
                  </div>
                ) : (
                  ""
                )}

                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-1 sm:gap-1 sm:grid-flow-row-dense">
                  <div className="text-sm text-center text-gray-500 ">
                    {language === "DE"
                      ? "Für den Prozess des Aktualiserens musst du dich erneut einloggen"
                      : "For the update process you will need to sign in again!"}
                  </div>
                  <button
                    type="button"
                    className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-white bg-green-500 border border-green-500 rounded-md shadow-sm select-none hover:bg-green-400 sm:mt-0 sm:col-start-1 sm:text-sm focus:outline-none"
                    onClick={() => {
                      if (id && nameInput && pictureInput && genderInput) {
                        setShowUpdateError(false);
                        saveUserUpdated(
                          id,
                          nameInput,
                          pictureInput,
                          genderInput
                        );
                      } else {
                        setShowUpdateError(true);
                      }
                    }}
                  >
                    {language === "DE"
                      ? "Profil aktualisieren"
                      : "Update Profile"}
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ChangeUserPictureModal;
