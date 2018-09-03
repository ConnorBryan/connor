import React from "react";
import { graphql } from "gatsby";

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default function Post({ data }) {
  const { markdownRemark: post } = data;

  return <section dangerouslySetInnerHTML={{ __html: post.html }} />;
}
