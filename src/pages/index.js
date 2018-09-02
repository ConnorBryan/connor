import React from "react";

import Grid from "../components/grid";
import banner from "./banner.jpg";

const IndexPage = () => (
  <Grid>
    <section>
      <h1>Who I Am</h1>
      <p>
        I'm a passionate JavaScript developer currently acting as the head of
        development for <a href="https://www.MyCrypto.com/">MyCrypto</a>.
      </p>
      <h1>Where to Find Me</h1>
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
      </ul>
    </section>
    <section style={{ marginTop: "5rem", textAlign: "center" }}>
      <img src={banner} alt="Banner" />
    </section>
  </Grid>
);

export default IndexPage;
