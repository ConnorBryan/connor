import React from "react";
import { graphql } from "gatsby";

import Grid from "../components/grid";
import Panel from "../components/panel";
import PostList from "../components/post-list";

const IndexPage = ({
  data: {
    allMarkdownRemark: { totalCount, edges }
  }
}) => (
  <Grid>
    <Panel>
      <h2>Who I Am</h2>
      <p>
        I'm a passionate JavaScript developer currently acting as the head of
        development for <a href="https://www.MyCrypto.com/">MyCrypto</a>.
      </p>
    </Panel>
    <Panel>
      <PostList totalCount={totalCount} posts={edges} />
    </Panel>
    <Panel>
      <h2>Social Media</h2>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/connor-bryan-40b992111/">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/ConnorBryan">GitHub</a>
        </li>
      </ul>
    </Panel>
    <Panel>
      <h2>Hangout Spots</h2>
      <ul>
        <li>
          On <a href="https://www.reactiflux.com/">Reactiflux</a>, an amazing
          community of over 25,000 JavaScript developers.
        </li>
        <li>At Dallas area tech meetups</li>
        <li>On a disc golf course</li>
        <li>On a tennis court</li>
        <li>Listening to live music</li>
        <li>With my girlfriend, Elena</li>
      </ul>
    </Panel>
    <section />
  </Grid>
);

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

export default IndexPage;
