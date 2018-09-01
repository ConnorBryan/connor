import React from "react";

import Layout from "./layout";
import "./grid.css";

export default function Grid({ children }) {
  return (
    <Layout>
      <section className="Grid">
        <section className="Grid-header">
          <section className="Grid-header-content">
            <section className="Grid-header-image">
              <img src="https://placehold.it/500x500" alt="Profile" />
            </section>
            <section className="Grid-header-text">
              <h2>Connor Bryan</h2>
              <h3>Principal Architect</h3>
            </section>
          </section>
        </section>
        <section className="Grid-content-wrapper">
          <section className="Grid-content">{children}</section>
        </section>
      </section>
    </Layout>
  );
}
