import React from "react";
import Image from "gatsby-image";

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center py-8">
      <Image fixed={picture.fixed} className="w-12 h-12 rounded-full mr-2" />
      <div className="text-xs md:text-sm lg:text-md font-semibold">{name}</div>
    </div>
  )
}
