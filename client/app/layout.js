import "@/app/_styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: {
    default: "Welcome | Rupnet Ticketing",
    template: "%s | Rupnet Ticketing",
  },
  description:
    "A ticketing platform for all your needs built with microservices architecture, next and node.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
