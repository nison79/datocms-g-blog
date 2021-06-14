import React from "react";
import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "./cover-image";
import { Link } from "gatsby";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} fluid={coverImage.small} />
      </div>
      <h3 className="text-3xl font-semibold mb-1leading-snug">
        <Link to={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      <div className="text-xs my-2 text-gray-400">
        <Date dateString={date} />
      </div>
      </h3>
      <p className="text-md leading-relaxed mb-4 text-gray-600">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
}
