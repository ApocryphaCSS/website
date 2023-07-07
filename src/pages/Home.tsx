import { useEffect } from "react";
import hljs from "highlight.js";

import { copyToClipboard } from "@/utils/Browser";

function Home() {
  useEffect(() => {
    hljs.highlightAll();
  });

  return (
    <>
      <main>
        <div className="center-text">
          <h1 className="color-primary">apocrypha.css</h1>
          <h3>A modular, lightweight SCSS package.</h3>
          <p>
            Copy the link tag below to start hacking away or install via npm:
          </p>
          <pre className="center oneline">
            <code id="apocrypha-link" className="html">
              &lt;link rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/@apocrypha/core/css/apocrypha.min.css"
              /&gt;
            </code>
            <button
              onClick={() => copyToClipboard("apocrypha-link")}
              className="sans-serif"
            >
              Copy
            </button>
          </pre>
          <pre className="center oneline">
            <code id="apocrypha-npm" className="bash">
              npm install --save-dev @apocrypha/core
            </code>
            <button
              onClick={() => copyToClipboard("apocrypha-npm")}
              className="sans-serif"
            >
              Copy
            </button>
          </pre>
        </div>

        <h2>Why Apocrypha?</h2>
        <p>
          Maybe you're wondering if apocrypha is right for you. Do you just want
          to write HTML without styling too much? Maybe you want some features
          from Apocrypha but not others? If you said yes to any of these, try it
          out! Apocrypha is made to be a <i>classless framework</i> with some
          additional utility classes for certain use cases; and best of all:
          it's <i>modular</i> in design. You can take the features you need
          while discarding the rest, allowing your stylesheet to be optimized
          for your website needs.
        </p>
        <p>
          Made to be small yet powerful, apocrypha.css allows developers to
          write HTML without thinking too much of the styling side. Of course,
          you'll need to touch CSS every now and then to achieve what you need
          when Apocrypha is insufficient; but this is expected, no?
        </p>
      </main>
    </>
  );
}

export default Home;
