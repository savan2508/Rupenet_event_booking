import { headers } from "next/headers";
import buildClient from "@/app/api/build-client";

async function getCurrentUser() {
  const headersStore = await headers();

  const client = buildClient(headersStore, true, "https://auth-srv:3000");

  try {
    const response = await client.get("/api/users/currentuser");
    return response.data.currentUser;
  } catch (error) {
    return null;
  }
}

export default async function Home() {
  const currentUser = await getCurrentUser();

  return (
    <div>
      {currentUser ? <h1>Welcome, {currentUser.email}!</h1> : <h1>Home</h1>}
    </div>
  );
}
