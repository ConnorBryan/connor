import React from "react";

export const query = graphql`
  query {
    markdownRemark {
      html
    }
  }
`;

export default function Post({ data: { markdownRemark: post } }) {
  return <section dangerouslySetInnerHTML={{ __html: post.html }} />;
}
