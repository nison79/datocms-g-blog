import React from "react";
import { Link } from 'gatsby'

export default function Header() {
  return (
    <h2 className="text-1xl md:text-2xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link
        to="/"
        className="transition duration-400 ease-in-out opacity-100 text-gray-800 hover:text-purple-700"
      >
        Aspects of life.
      </Link>
    </h2>
  );
}
