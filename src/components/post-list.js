import React from "react";
import { Link } from "gatsby";

import "./post-list.css";

export default function PostList({ totalCount, posts }) {
  return (
    <section className="PostList">
      <h2>Posts ({totalCount})</h2>
      <ul>
        {posts.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.fields.slug}>
              <h3>{node.frontmatter.title}</h3>
              <aside>{node.frontmatter.date}</aside>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
