import { useState, useEffect } from "react";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";

import DashBoardNoSession from "./components/dashboard/DashBoardNoSession";

export default function Dashboard() {
  const [session, loading] = useSession();
  const [content, setContent] = useState();
  const router = useRouter();
  const [language] = useState(
    typeof window !== "undefined" && localStorage.getItem("language") === null
      ? "DE"
      : typeof window !== "undefined" && localStorage.getItem("language")
  );

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/dashboard");
      const json = await res.json();

      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, []);

  if (typeof window !== "undefined" && loading) return null;

  if (!session) {
    return (
      <main>
        <DashBoardNoSession />
      </main>
    );
  }
  return (
    <main>
      <div>
        {language &&
        typeof window !== "undefined" &&
        localStorage.getItem("language") === null
          ? localStorage.setItem("language", language)
          : ""}
        <h1>DASHBOARD HIER</h1>
        <p>{content}</p>
      </div>
    </main>
  );
}
