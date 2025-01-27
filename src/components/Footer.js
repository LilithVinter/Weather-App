import React from "react";

export default function Footer() {
  return (
    <div>
      <footer>
        <p>
          This project was coded by{" "}
          <a
            href="https://github.com/LilithVinter"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Carie Ng
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/LilithVinter/Weather-App"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://carie-learning-to-code-3.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            hosted on Netify
          </a>
        </p>
      </footer>
    </div>
  );
}
