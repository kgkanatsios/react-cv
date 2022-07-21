import React from 'react';
import _ from 'lodash';

import TagList from './TagList';

function TagSection(props) {
  const tagsList = _.get(props, 'tagsList', []);
  return (
    <div className="mb-2 tag-section-container">
      {props.title && <div className="mb-1 pb-1 border-bottom font-weight-bold tag-section-title">{props.title}</div>}
      {tagsList &&
        tagsList.map((tagList, idx) => {
          return <TagList {...tagList} key={idx} />;
        })}
    </div>
  );
}

export default TagSection;
