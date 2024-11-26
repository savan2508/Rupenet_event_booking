"use client";

import buildClient from "@/helper/build-client.js";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignOut() {
  const client = buildClient();
  const router = useRouter();

  const signOut = async () => {
    try {
      await client.post("/api/users/signout");
      await router.push("/");
    } catch (error) {
      await router.push("/");
    }
  };

  useEffect(() => {
    signOut();
  }, []);

  return (
    <>
      <div>You are signing out...</div>
    </>
  );
}
