import React from "react";
import Image from "gatsby-image";

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <Image fixed={picture.fixed} className="w-12 h-12 rounded-full mr-4" />
      <div className="text-xs md:text-md lg:text-lg font-semibold">{name}</div>
    </div>
  )
}
