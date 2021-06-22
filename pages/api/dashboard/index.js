import { getSession } from "next-auth/client";

export default async (req, res) => {
  const session = await getSession({ req });

  if (session) {
    res.send({
      content: "Willkommen auf dem Dashboard!",
    });
  } else {
    res.send({
      error: "Du musst dich einloggen, um das Dashboard zu nutzen.",
    });
  }
};
