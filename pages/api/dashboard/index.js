import { getSession } from "next-auth/client";
import jwt from "next-auth/jwt";

const secret = process.env.JWT_SECRET;

export default async (req, res) => {
  const session = await getSession({ req });

  if (session) {
    const token = await jwt.getToken({ req, secret });
    console.log("JSON Web Token", token);
    res.send({
      content: "Willkommen auf dem Dashboard!",
    });
  } else {
    res.send({
      error: "Du musst dich einloggen, um das Dashboard zu nutzen.",
    });
  }
};
