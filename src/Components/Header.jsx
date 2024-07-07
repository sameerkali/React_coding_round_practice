import React from 'react';

const Header = () => {
  return (
    <footer className="footer w-full mt-10 text-base-content py-4 sm:pr-9 sm:pc-0 px-2  ">
      <aside className="text-left">
        <p>
          Copyright © {new Date().getFullYear()} - OpenSource{" "}
          <a href="https://github.com/sameerkali/React_coding_round_practice" target="_blank" rel="noopener noreferrer">
            project{" "}
          </a>
          managed by{" "}
          <a href="https://github.com/sameerkali" target="_blank" rel="noopener noreferrer">
            @sameerkali{" "}
          </a>
        </p>
      </aside>
    </footer>
  );
};

export default Header;
