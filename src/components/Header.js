import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header(props) {
  return (
    <header className="mb-3 text-center">
      <div className="top-border d-flex">
        <span className="green-bg d-inline-block h-100"></span>
        <span className="blue-bg d-inline-block h-100"></span>
        <span className="orange-bg d-inline-block h-100"></span>
        <span className="purple-bg d-inline-block h-100"></span>
        <span className="light-blue-bg d-inline-block h-100"></span>
      </div>
      <div className="p-3">
        {props.name && <div className="name font-weight-lighter">{props.name}</div>}
        {props.title && <div className="title font-weight-lighter">{props.title}</div>}
        {props.links && (
          <div className="links mx-n3 mt-2 d-flex justify-content-center flex-wrap align-items-center">
            {props.links.map((link, idx) => {
              return (
                <a className="text-white mx-3" href={link.url} key={idx}>
                  <FontAwesomeIcon className="mr-2" icon={link.icon} />
                  {link.title}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
