import React from "react"
import _ from "lodash"

function List(props) {
  const listItems = _.get(props, "list", [])
  return (
    <div className="list-container mb-2">
      {listItems &&
        listItems.map((item, idx) => {
          return (
            <div
              className="mb-1"
              key={idx}
              dangerouslySetInnerHTML={{ __html: item }}
            />
          )
        })}
    </div>
  )
}

export default List
