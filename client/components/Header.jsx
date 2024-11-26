"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function Header({ isAuthenticated: initialAuthState }) {
  const [isAuthenticated, setIsAuthenticated] = useState(initialAuthState);
  const router = useRouter();

  console.log("isAuthenticated: ", isAuthenticated);

  const links = [
    !isAuthenticated && { label: "Sign Up", href: "/auth/signup" },
    !isAuthenticated && { label: "Sign In", href: "/auth/signin" },
    isAuthenticated && { label: "Sign Out", href: "/auth/signout" },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <li key={href} className="nav-item">
          <Link href={href} className="nav-link">
            {label}
          </Link>
        </li>
      );
    });

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            Rupnet Ticketing
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-between"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Pricing
                </Link>
              </li>
            </ul>
            <div className="d-flex justify-content-end">
              <ul className="navbar-nav d-flex align-items-center">{links}</ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
