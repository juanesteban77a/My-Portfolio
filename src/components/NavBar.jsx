import React from 'react';
import { Icon } from '@iconify/react';

function NavBar() {
  return (
    <>
      <ul className="menu">
        <li>
          <a href="#0">
            <span>Home</span>
            <span>
              <Icon icon="iconamoon:home-bold" width="30px" aria-hidden="true" />
            </span>
          </a>
        </li>
        <li>
          <a href="#skills-section2">
            <span>Skills</span>
            <span>
              <Icon icon="game-icons:skills" width="30px" aria-hidden="true" />
            </span>
          </a>
        </li>
        <li>
          <a href="#0">
            <span>Contact</span>
            <span>
              <Icon icon="fluent:book-contacts-24-regular" width="30px" aria-hidden="true" />
            </span>
          </a>
        </li>
      </ul>
    </>
  );
}

export default NavBar;
