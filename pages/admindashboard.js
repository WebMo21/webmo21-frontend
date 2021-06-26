import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/client";

const admindashboard = () => {
  const [session, loading] = useSession();
  const [content, setContent] = useState();

  // Fetch content from protected route
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/admindashboard");
      const json = await res.json();
      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== "undefined" && loading) return null;

  // If no session exists, display access denied message
  if (!session) {
    return <div>"You have no authentication to see this page!"</div>;
  }

  // If session exists but the User is wrong, display the error message
  if (session.user.email != "saschamaj@protonmail.com") {
    return <div>You are not authorized to see this page.</div>;
  }

  return (
    <div>
      <h1>Gesicherte Seite</h1>
      <p>
        <strong>{content}</strong>
      </p>
    </div>
  );
};

export default admindashboard;
