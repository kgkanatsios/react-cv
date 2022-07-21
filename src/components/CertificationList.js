import React from 'react';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CertificationList(props) {
  const certifications = _.get(props, 'certifications', []);
  return (
    certifications &&
    certifications.map((certification, idx) => {
      return (
        <div className="mb-2 certification-container" key={idx}>
          {certification.title && <div className="font-weight-bold">{certification.title}</div>}
          {certification.university && (
            <div>
              <FontAwesomeIcon className="mr-1" icon={['fas', 'graduation-cap']} />
              {certification.university}
            </div>
          )}
          {certification.date && (
            <div>
              <FontAwesomeIcon className="mr-1" icon={['fas', 'calendar-alt']} />
              {certification.date}
            </div>
          )}
        </div>
      );
    })
  );
}

export default CertificationList;
