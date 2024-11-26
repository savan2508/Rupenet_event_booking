import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "@/components/Header.jsx";
import { getCurrentUser } from "@/helper/getUser.js";

export const metadata = {
  title: {
    default: "Welcome | Rupnet Ticketing",
    template: "%s | Rupnet Ticketing",
  },
  description:
    "A ticketing platform for all your needs built with microservices architecture, next and node.",
};

export default async function RootLayout({ children }) {
  const currentUser = await getCurrentUser();

  console.log("currentUser: ", currentUser);
  console.log("isAuthenticated: ", !!currentUser);
  return (
    <html lang="en">
      <body className="bg-body mx-3">
        <Header isAuthenticated={!!currentUser} />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
