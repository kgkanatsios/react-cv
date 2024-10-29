import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Company(props) {
  const firstRow = (jobTitle, startDate, endDate) => {
    if (!jobTitle && !startDate && !endDate) return;

    return (
      <div>
        {jobTitle && <span className="font-weight-bold mr-3">{jobTitle}</span>}
        {startDate && endDate && (
          <span>
            <FontAwesomeIcon className="mr-1" icon={['fas', 'calendar-alt']} />
            {startDate} to {endDate}
          </span>
        )}
      </div>
    );
  };
  const secondRow = (companyName, companyPlace) => {
    if (!companyName && !companyPlace) return;

    return (
      <div>
        {companyName && (
          <span className="mr-3">
            <FontAwesomeIcon className="mr-1" icon={['fas', 'building']} />
            <span className="font-weight-bold">{companyName}</span>
          </span>
        )}
        {companyPlace && (
          <span>
            <FontAwesomeIcon className="mr-1" icon={['fas', 'map-pin']} />
            {companyPlace}
          </span>
        )}
      </div>
    );
  };

  return (
    <div className="mb-2 company-container">
      {firstRow(props.jobTitle, props.startDate, props.endDate)}
      {secondRow(props.companyName, props.companyPlace)}
      {props.text && <div className="company-text text-justify mb-1" dangerouslySetInnerHTML={{ __html: props.text }} />}
    </div>
  );
}

export default Company;
