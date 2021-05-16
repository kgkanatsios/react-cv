import React from "react"
import _ from "lodash"
import { Badge } from "react-bootstrap"

function TagList(props) {
  const tags = _.get(props, "tags", [])
  return (
    <div className="tag-list-container mb-1">
      {props.label && <span className="mr-2">{props.label}:</span>}
      {tags &&
        tags.map((tag, idx) => {
          return (
            <Badge
              className="mr-1 font-weight-normal tag-badge border"
              pill={true}
              key={idx}
            >
              {tag}
            </Badge>
          )
        })}
    </div>
  )
}

export default TagList
