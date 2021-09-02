import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const CreatePlanModal = ({
  showCreatePlanModal,
  setShowCreatePlanModal,
  refetchPlans,
  getCurrentWeekNumber,
  userId,
  language,
}) => {
  const cancelButtonRef = useRef(null);
  const [inputName, setInputName] = useState(
    language === "DE" ? "Dein Trainingsplan" : "Your Workout Plan"
  );
  const [inputYear, setInputYear] = useState(new Date().getFullYear());
  const [inputCalendarWeek, setInputCalendarWeek] = useState(
    getCurrentWeekNumber()
  );

  const createWeeklyWorkoutPlan = (
    userId,
    planName,
    planYear,
    planCalendarWeek
  ) =>
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}` + `/weekly-workout-plans`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
        name: planName,
        year: planYear,
        calendar_week: planCalendarWeek,
        day_1: [],
        day_2: [],
        day_3: [],
        day_4: [],
        day_5: [],
        day_6: [],
        day_7: [],
      }),
    })
      .then((response) =>
        response
          .json()
          .then((data) => {
            console.log("DONE CREATING");
            refetchPlans();
          })
          .catch((e) => console.log(e))
      )
      .catch((e) => console.log(e));

  return (
    <Transition.Root
      show={showCreatePlanModal ? showCreatePlanModal : false}
      as={Fragment}
    >
      <Dialog
        as="div"
        static
        className="fixed inset-0 z-50 overflow-y-auto"
        initialFocus={cancelButtonRef}
        open={showCreatePlanModal}
        onClose={setShowCreatePlanModal}
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
                    ? "Bearbeite deinen Trainingsplan"
                    : "Edit your Weekly Workout Plan"}
                </h2>
                <div className="mb-4 text-center">
                  <div className="text-center text-white text-md">Name</div>
                  <input
                    value={inputName}
                    type="text"
                    id="plan-name"
                    maxLength="40"
                    onChange={(event) => setInputName(event.target.value)}
                    className="border !bg-gray-700 border-transparent text-2xl font-bold !text-green-500 select-none text-center rounded-md placeholder-green-700 w-full"
                  ></input>
                </div>
                <div className="flex mb-8">
                  <div className="mr-2">
                    <div className="text-center text-white text-md">
                      {language === "DE" ? "Jahr" : "Year"}
                    </div>
                    <input
                      value={inputYear}
                      type="text"
                      id="year-input"
                      maxLength="4"
                      onChange={(event) => {
                        if (/^[0-9]*$/.test(event.target.value))
                          setInputYear(event.target.value);
                      }}
                      className="border !bg-gray-700 border-transparent text-2xl font-bold !text-green-500 select-none text-center rounded-md placeholder-green-700 w-full "
                    ></input>
                  </div>

                  <div className="ml-2">
                    <div className="text-center text-white text-md">
                      {language === "DE" ? "Kalenderwoche" : "Calendar Week"}
                    </div>
                    <input
                      value={inputCalendarWeek}
                      type="text"
                      id="calender-week-input"
                      maxLength="2"
                      onChange={(event) => {
                        if (/^[0-9]*$/.test(event.target.value))
                          setInputCalendarWeek(event.target.value);
                      }}
                      className="border !bg-gray-700 border-transparent text-2xl font-bold !text-green-500 select-none text-center rounded-md placeholder-green-700 w-full "
                    ></input>
                  </div>
                </div>

                <div className="flex">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full px-4 py-2 mt-3 mr-4 text-base font-medium text-gray-700 bg-gray-300 border border-gray-300 rounded-md shadow-sm select-none hover:bg-gray-200 sm:mt-0 sm:col-start-1 sm:text-sm focus:outline-none"
                    onClick={() => setShowCreatePlanModal(false)}
                    ref={cancelButtonRef}
                  >
                    {language === "DE" ? "Abbrechen" : "Abort"}
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-green-700 bg-green-300 border border-green-300 rounded-md shadow-sm select-none hover:bg-green-200 sm:mt-0 sm:col-start-1 sm:text-sm focus:outline-none"
                    onClick={() => {
                      if (
                        inputYear > 2020 &&
                        inputCalendarWeek > 0 &&
                        inputCalendarWeek < 53
                      ) {
                        createWeeklyWorkoutPlan(
                          userId,
                          inputName,
                          inputYear,
                          inputCalendarWeek
                        );
                        setShowCreatePlanModal(false);
                      }
                    }}
                    ref={cancelButtonRef}
                  >
                    {language === "DE" ? "Speichern" : "Save"}
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

export default CreatePlanModal;
