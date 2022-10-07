import React from "react";
import { Link } from "react-router-dom";

export default function CustomLink({ to, children }) {
  return (
    <Link
      className="font-medium 
      hover:text-indigo-200 transition"
      to={to}
    >
      {children}
    </Link>
  );
}
