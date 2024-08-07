import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center mt-10 text-base-content p-4 text-white">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - OpenSource {" "}
          
          <a href="https://github.com/sameerkali/React_coding_round_practice" target="_blank">
            project{" "}
          </a>
           managed by{" "}
          <a href="https://github.com/sameerkali" target="_blank">
            @sameerkali{" "}
          </a>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
