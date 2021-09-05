import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/client";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

import UserCard from "./UserCard";
import EditWorkoutModal from "../workouts/EditWorkoutModal";
import { findMuscleGroup } from "../workouts/WorkoutsSection";

const ADMIN_ID = 12;

const AdminSection = ({ language }) => {
  const [session] = useSession();
  const [fetchedUsers, setFetchedUsers] = useState([]);
  const [showEditWorkoutModal, setShowEditWorkoutModal] = useState(false);
  const [gender, setGender] = useState("");

  const fetchAllUsers = () =>
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}` + `/users/`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) =>
        response
          .json()
          .then((data) => setFetchedUsers(data))
          .catch((e) => console.log(e))
      )
      .catch((e) => console.log(e));

  useEffect(() => {
    if (session) {
      fetchAllUsers();
      setGender(session.user.gender);
    }
  }, []);

  return (
    <>
      <div
        className="relative z-0 flex-1 pb-8 overflow-y-auto"
        data-aos="fade-up"
      >
        <div className="pb-8 bg-gray-900" data-aos="fade-up">
          <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
            <h2 className="max-w-6xl pl-1 mx-auto mt-8 text-2xl font-medium leading-6 text-white select-none">
              {language === "DE" ? "Admin Einstellungen" : "Admin Settings"}
            </h2>
            <div className="justify-center p-8 py-6 mt-5 bg-gray-700 rounded-lg md:flex">
              <div className="flex-col">
                <div className="mb-5">
                  <div className="flex flex-col">
                    <div className="mb-2 text-2xl font-bold text-center text-green-500 select-none">
                      {language === "DE"
                        ? "Benutzerverwaltung"
                        : "User Management"}
                    </div>
                    <div className="flex flex-wrap justify-center">
                      {fetchedUsers.length > 0
                        ? fetchedUsers
                            .sort((a, b) => a.id - b.id)
                            .map((user) => (
                              <UserCard
                                active={user.active}
                                createdAt={user.created_at}
                                email={user.email}
                                emailVerified={user.email_verified}
                                gender={user.gender}
                                id={user.id}
                                image={user.image}
                                name={user.name}
                                role={user.role}
                                username={user.username}
                                refetchUsers={"Test"}
                                language={language}
                              />
                            ))
                        : ""}
                    </div>
                    {console.log("fetchedUsers", fetchedUsers)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default AdminSection;
