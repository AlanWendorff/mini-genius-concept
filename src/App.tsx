import { createElement } from "react";
import { jsExample } from "./styles";
import "./styles.css";

const App = () => (
  <div className="container">
    <h1>What is behind JSX (React 16)</h1>
    <p>We will describe what is behind the JSX code.</p>
    <p>
      JSX is an HTML-like syntax that browsers don’t understand out of the box,
      so most React users rely on a compiler like Babel or TypeScript to
      transform JSX code into regular JavaScript.
    </p>
    <p>
      As you may have read, we have been using JSX.
      <br />
      Under the hood, the compiler is turning it into regular JavaScript, let's
      see an example:
    </p>

    <p title="jsx-example" className="jsxExample">
      Hello World! (JSX)
    </p>

    {createElement(
      "p",
      { style: jsExample, title: "javascript-example" },
      "Hello World! (JS)"
    )}

    {createElement(
      "p",
      null,
      "Right now we are using JS code. The equivalent returned by the compiler."
    )}
  </div>
);

export default App;
