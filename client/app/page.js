import { getCurrentUser } from "@/helper/getUser.js";

export default async function Home() {
  const currentUser = await getCurrentUser();

  return (
    <div>
      {currentUser ? <h1>Welcome, {currentUser.email}!</h1> : <h1>Home</h1>}
    </div>
  );
}
