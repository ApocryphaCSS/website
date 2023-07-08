import hljs from "highlight.js";
import { useEffect } from "react";

import { copyToClipboard } from "@/utils/Browser";

export default function Documentation() {
  useEffect(() => {
    hljs.highlightAll();
  });

  return (
    <>
      <div className="flex flex-vert">
        <aside>
          <nav className="sidebar">
            <b>Table of Contents</b>
            <a href="#introduction">Introduction</a>
            <a href="#theme-customization">Theme Customization</a>
          </nav>
        </aside>

        <main className="sidebar-content">
          <section id="introduction">
            <h1 id="documentation" className="color-primary center-text">
              Documentation
            </h1>
            <p>
              Welcome to the documentation page of ApocryphaCSS! The content
              below outlines everything you need to get started. From simple
              theme changes to advanced SCSS restyling, you'll most likely find
              what you need here.
            </p>
            <p>
              To start using ApocryphaCSS, it is recommended to install the node
              package.
            </p>
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
            <p>
              If you do not use <code>npm</code> and some other development
              environment, you can link to the minified CSS:
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
          </section>

          <section id="theme-customization">
            <h2>Theme Customization</h2>
            <section className="note">
              To achieve full customizability, it is best to install
              ApocryphaCSS through npm. By using SCSS, you get access to
              compilation options that you wouldn't get through using CSS.
            </section>
            <p>
              One of the main goals of ApocryphaCSS is to make it customizable
              enough so developers can tweak it to their liking. Without
              customization, it wouldn't be as appealing to developers who want
              to use their own color scheme. Luckily, customization is really
              easy. Below is a preview of the <code>:root</code> pseudo-class in
              CSS.
            </p>
            <pre>
              <code className="css">
                {`:root {
  --font-default: sans-serif;
  --background: #322d3f;
  --background-secondary: #2f2d3f;
  --background-tertiary: #22202c;
  --foreground: #fff3f2;
  --accent-primary: #fd9696;
  --accent-secondary: #f9f99a;
  --accent-success: #c0faa7;
  --accent-success-bg: rgba(192, 250, 167, 0.05);
  --accent-note: #a6f8ff;
  --accent-note-bg: rgba(166, 248, 255, 0.05);
  --accent-warn: #f9f99a;
  --accent-warn-bg: rgba(249, 249, 154, 0.05);
  --accent-error: #c33b23;
  --accent-error-bg: rgba(195, 59, 35, 0.05);
  --link-color: #fd9696;
  --link-color-hover: #fbe8e8;
  --corner-radius: 0.5rem;
}`}
              </code>
            </pre>
            <p>
              Any of the above CSS variables can be changed to suit your needs.
              For example, if you want to change the background color to white
              and the text to be black, we can redefine the <code>:root</code>{" "}
              pseudo-class by defining the <code>--background</code> and{" "}
              <code>--foreground</code> variables. Changing only these two
              variables will not make any changes to any other variables, so
              make sure that the colors are distinct. The snippet below shows
              how to do this:
            </p>
            <pre>
              <code>
                {`:root {
  --background: white;
  --foreground: black;
}`}
              </code>
            </pre>
            <h3>Customizing with SCSS</h3>
            <p>
              If you use SCSS, the <code>@apocrypha/core</code> package contains
              SCSS source that you can access. In your SCSS file, include the
              following line to import ApocryphaCSS:
            </p>
            <pre>
              <code className="scss">
                @use "@apocrypha/core/scss/apocrypha.scss" as *;
              </code>
            </pre>
            <p>
              This allows you to use the variables defined in ApocryphaCSS in
              your own stylesheets, which can be found in the{" "}
              <code>scss/internal/_theme.scss</code> file.
            </p>
            <p>
              If you need to make any changes to compile flags or variables, you
              can easily do so using the <code>with</code> keyword. You can
              enable square-bracket links and change the background color like
              so:
            </p>
            <pre>
              <code className="scss">{`@use "@apocrypha/core/scss/apocrypha.scss" as * with(
  $enable-bracket-links: true,
  $background: white
);`}</code>
            </pre>
            <p>
              Not only does this change the values of the variables internally,
              but they're also readily available for you to use in your own
              styles.
            </p>

            <h4>SCSS Variables</h4>
            <p>
              The tables below outline each theme variable and compile flag.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Theme Variable</th>
                  <th>Effect</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>$font-default</code>
                  </td>
                  <td>
                    The default font to use across the site. This does not
                    affect monospace fonts.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>$background</code>
                  </td>
                  <td>
                    The primary color for the background. Used for the main
                    content provided to the user.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>$background-secondary</code>
                  </td>
                  <td>
                    The secondary color for the background. Used for elements
                    within the main content whose background would need to
                    contrast the main content.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>$background-tertiary</code>
                  </td>
                  <td>
                    The tertiary color for the background. Used for separating
                    miscellaneous content from the main content (like a sidebar)
                    as well as to contrast with the secondary background color.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>$foreground</code>
                  </td>
                  <td>Primarily used for text.</td>
                </tr>
                <tr>
                  <td>
                    <code>$accent-primary</code>
                  </td>
                  <td>
                    The primary accent color for the site. Used for borders,
                    links, etc.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>$accent-secondary</code>
                  </td>
                  <td>
                    The secondary accent for the site. Used where a primary
                    accent shouldn't be (like a focus border).
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>$accent-success</code>
                  </td>
                  <td>
                    Should be a green color. Indicates an action that succeeded.
                    Documentation-wise, it is used for best practices.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>$accent-success-bg</code>
                  </td>
                  <td>
                    Should be a green color. The background color for
                    success-accented content.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>$accent-note</code>
                  </td>
                  <td>
                    Should be a blue color. Used to notify users of ongoing
                    operations. Documentation-wise, it is used to notify users
                    of alternative methods.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>$accent-note-bg</code>
                  </td>
                  <td>
                    Should be a blue color. The background color for
                    note-accented content.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>$accent-warn</code>
                  </td>
                  <td>
                    Should be a yellow color. Used to warn users but are
                    optional to follow.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>$accent-warn-bg</code>
                  </td>
                  <td>
                    Should be a yellow color. The background color for
                    warning-accented content.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>$accent-error</code>
                  </td>
                  <td>
                    Should be a red color. Used for stronger warnings that users
                    should absolutely follow.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>$accent-error-bg</code>
                  </td>
                  <td>
                    Should be a red color. Background color for error-accented
                    content.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>$link-color</code>
                  </td>
                  <td>
                    The color for links. This is automatically set through the{" "}
                    <code>$primary-accent</code> variable, but can be manually
                    set if needed.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>$link-color-hover</code>
                  </td>
                  <td>
                    Automatically set through the <code>$link-hover</code>{" "}
                    variable, but can be manually set if needed.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>$corner-radius</code>
                  </td>
                  <td>Used for adjusting the border radius.</td>
                </tr>
              </tbody>
            </table>
            <p>
              Compile flags allow for special tweaks to ApocryphaCSS, allowing
              for powerful customization. Below are the current compile flags:
            </p>
            <table>
              <thead>
                <tr>
                  <th>Compile Flag</th>
                  <th>Effect</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>$enable-bracket-links</code>
                  </td>
                  <td>
                    Surrounds links with square brackets. Disabled by default.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>$enable-animations</code>
                  </td>
                  <td>Enable animations. Enabled by default.</td>
                </tr>
                <tr>
                  <td>
                    <code>$enable-focus-outline</code>
                  </td>
                  <td>
                    Enables the focus outline for form elements. This exists for
                    accessibility reasons, disable at your own risk.
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </>
  );
}
