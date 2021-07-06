import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const ChangeUserPictureModal = ({
  showChangePictureModal,
  setShowChangePictureModal,
  pictureOfUser,
  handleChangeUserPicture,
  language,
}) => {
  const cancelButtonRef = useRef(null);
  const [pictureURLInput, setPictureURLInput] = useState(pictureOfUser);

  return (
    <Transition.Root
      show={showChangePictureModal ? showChangePictureModal : false}
      as={Fragment}
    >
      <Dialog
        as="div"
        static
        className="fixed inset-0 z-50 overflow-y-auto"
        initialFocus={cancelButtonRef}
        open={showChangePictureModal}
        onClose={setShowChangePictureModal}
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
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
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
              className="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-gray-800 rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6 iphone:mt-12"
              data-aos="fade-in"
            >
              <div>
                <label
                  htmlFor="price"
                  className="block mb-4 text-xl font-medium text-center text-gray-200 select-none"
                >
                  {language === "DE"
                    ? "Dein Profilbild aktualisieren?"
                    : "Do you want to update your profile picture?"}
                </label>
                <input
                  value={pictureURLInput}
                  type="text"
                  id="picture-of-user"
                  onChange={(event) => setPictureURLInput(event.target.value)}
                  className="border !bg-gray-600 border-transparent text-3xl font-bold !text-green-500 select-none w-full rounded-md placeholder-green-700 text-center iphone:!text-base  mx-auto"
                />
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-green-500 border border-transparent rounded-md shadow-sm select-none hover:bg-green-400 sm:col-start-2 sm:text-sm focus:outline-none"
                    onClick={() => handleChangeUserPicture(pictureURLInput)}
                  >
                    {language === "DE" ? "Aktualisieren" : "Update"}
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm select-none hover:bg-gray-100 sm:mt-0 sm:col-start-1 sm:text-sm focus:outline-none"
                    onClick={() => setShowChangePictureModal(false)}
                    ref={cancelButtonRef}
                  >
                    {language === "DE" ? "Abbrechen" : "Cancel"}
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
