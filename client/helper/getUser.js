import { headers } from "next/headers";
import buildClient from "@/helper/build-client.js";

export async function getCurrentUser() {
  const headersStore = await headers();

  const client = buildClient(headersStore, true, "https://auth-srv:3000");

  try {
    const response = await client.get("/api/users/currentuser");
    console.log(response.data.currentUser);
    return response.data.currentUser;
  } catch (error) {
    return null;
  }
}

// export const getCurrentUser = cache(fetchCurrentUser);
