import { getSession } from "next-auth/client";

export default async (req, res) => {
  const session = await getSession({ req });

  if (session && session.user.email === "saschamaj@protonmail.com") {
    res.send({
      content: "Willkommen auf dem Admin Dashboard!",
    });
  } else {
    res.send({
      error: "Du musst dich als Admin einloggen, um das Dashboard zu nutzen.",
    });
  }
};
