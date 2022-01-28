import React from "react";
import Review from "./review"

function App() {
  return (
    <div id="root">
      <main>
        <section className="container">
          <div className="title">
            <h2>Our Review</h2>
            <div className="underline"></div>
          </div>
          <article className="review">
            <Review/>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
