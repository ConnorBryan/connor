import React from "react";
import { graphql, Link } from "gatsby";

import Grid from "../components/grid";
import Panel from "../components/panel";
import "./post.css";

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

  return (
    <Grid>
      <section className="Post">
        <section className="Post-header">
          <Link to="/">Back</Link>
        </section>
        <Panel>
          <section
            className="Post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </Panel>
      </section>
    </Grid>
  );
}
