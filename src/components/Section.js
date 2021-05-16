import React from "react"
import Company from "./Company"

function Section(props) {
  return (
    <div className="mb-3 section-container">
      {props.title && (
        <div className="border-bottom mb-2 section-title font-weight-bold pb-1">
          {props.title}
        </div>
      )}
      {props.company && <Company {...props.company} />}
      {props.text && (
        <div className="section-text text-justify mb-1">{props.text}</div>
      )}
    </div>
  )
}

export default Section
