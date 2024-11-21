"use server";

import { cookies } from "next/headers";
import { apiUrl } from "@/app/_apiUrl/apiUrl";

async function getCurrentUser() {
  const cookie = await cookies();

  console.log("cookies", cookie);
  const sessionCookie = cookie.getAll();

  console.log("sessionCookie", sessionCookie);

  const url = `${apiUrl}/api/users/currentuser`;

  try {
    const response = await fetch(url, {
      method: "GET",
      credentials: "include", // Include cookies in the request
      headers: {
        cookie: sessionCookie || "", // Pass the cookie if it exists
      },
    });
    if (response.status === 200) {
      const data = await response.json();
      return data.currentUser || null; // Return the user info if available
    }
  } catch (error) {
    console.error("Error fetching current user:", error);
  }

  return null; // Return null if the user is not authenticated or an error occurred
}

export default async function Home() {
  const currentUser = await getCurrentUser();

  return (
    <div>
      {currentUser ? (
        <h1>Welcome, {currentUser.email}!</h1> // Display user info if logged in
      ) : (
        <h1>Home</h1>
      )}
    </div>
  );
}
