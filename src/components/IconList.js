import React from "react"
import _ from "lodash"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function IconList(props) {
  const icons = _.get(props, "icons", [])
  return (
    <div className="icons-list-container d-flex justify-content-between flex-wrap mb-2">
      {icons &&
        icons.map((icon, idx) => {
          return <FontAwesomeIcon icon={icon} key={idx} />
        })}
    </div>
  )
}

export default IconList
