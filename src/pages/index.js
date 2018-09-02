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
    </section>
    <img
      style={{
        transform: "scale(1.5)",
        position: "absolute",
        bottom: 0,
        width: "100%",
        margin: 0
      }}
      src={banner}
      alt="Banner"
    />
  </Grid>
);

export default IndexPage;
