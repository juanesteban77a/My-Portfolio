import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

function Information() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatDate = () => {
    const options = { day: 'numeric', month: 'long' };
    return currentDate.toLocaleString('en-US', options);
  };

  const isAM = currentDate.getHours() < 12;
  const timeIcon = isAM ? <Icon className='sol' width="80px" icon="circum:sun" /> : <Icon icon="akar-icons:moon" />;

  return (
    <>
      <div className="Information">
        <div className="name">
          <h1>J-Code</h1>
        </div>
        <div className="description">
          <p>
            Welcome, I'm JCode, I'm a Full-Stack developer,
            I'm a system technician and technologist,
            I'm a flexible and respectful person.
          </p>
        </div>
        <div className="current-date">
            <div className="icon-date">
            {timeIcon}
            </div>
          <p className='date-fecha'> {formatDate()}</p>
          <p className='date-fecha-hours'> {currentDate.toLocaleTimeString()}</p>
        </div>
        <ul className="redes">
          <li>
            <a href="https://github.com/juanesteban77a">
              <span>GitHub</span>
              <span>
                <Icon icon="skill-icons:github-light" width="40" height="40" aria-hidden="true" />
              </span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/juan-esteban-cuchillo-perez-b77317266/">
              <span>LinkedIn</span>
              <span>
                <Icon icon="skill-icons:linkedin" width="30" height="30" aria-hidden="true" />
              </span>
            </a>
          </li>
          <li>
            <a href="#0">
              <span>Gmail</span>
              <span>
                <Icon icon="logos:google-gmail" width="30" height="30" aria-hidden="true" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Information;
