import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

const DeleteWorkoutFromPlanModal = ({
  showConfirmDeletePlanModal,
  setShowConfirmDeletePlanModal,
  callbackDeleteWeeklyWorkoutPlan,
  id,
  language,
}) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root
      show={showConfirmDeletePlanModal ? showConfirmDeletePlanModal : false}
      as={Fragment}
    >
      <Dialog
        as="div"
        static
        className="fixed inset-0 z-50 overflow-y-auto"
        initialFocus={cancelButtonRef}
        open={showConfirmDeletePlanModal}
        onClose={setShowConfirmDeletePlanModal}
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
                <h2 className="mb-4 text-2xl font-bold text-center text-green-500 select-none">
                  {language === "DE"
                    ? "Bist du dir sicher den Trainingsplan zu löschen?"
                    : "Are You Sure About Deleting That Weekly Workout Plan?"}
                </h2>
                <div className="flex pt-4 mb-2">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full px-4 py-2 mt-3 ml-2 mr-4 text-base font-medium text-gray-700 bg-gray-300 border border-gray-300 rounded-md shadow-sm select-none hover:bg-gray-200 sm:mt-0 sm:col-start-1 sm:text-sm focus:outline-none"
                    onClick={() => setShowConfirmDeletePlanModal(false)}
                    ref={cancelButtonRef}
                  >
                    {language === "DE" ? "Abbrechen" : "Abort"}
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center w-full px-4 py-2 mt-3 ml-4 mr-2 text-base font-medium text-white bg-red-500 border border-red-500 rounded-md shadow-sm select-none hover:bg-red-400 sm:mt-0 sm:col-start-1 sm:text-sm focus:outline-none"
                    onClick={() => {
                      callbackDeleteWeeklyWorkoutPlan(id);
                      setShowConfirmDeletePlanModal(false);
                    }}
                    ref={cancelButtonRef}
                  >
                    {language === "DE" ? "Löschen" : "Delete"}
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

export default DeleteWorkoutFromPlanModal;
