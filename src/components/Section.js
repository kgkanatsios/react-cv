import React from "react"
import _ from "lodash"

import Company from "./Company"
import TagSection from "./TagSection"
import CertificationList from "./CertificationList"
import IconList from "./IconList"
import List from "./List"

function Section(props) {
  const tagSections = _.get(props, "tagSections", [])
  const companies = _.get(props, "companies", [])
  return (
    <div className="mb-3 section-container">
      {props.title && (
        <div className="border-bottom mb-2 section-title font-weight-bold pb-1">
          {props.title}
        </div>
      )}
      {companies &&
        companies.map((company, idx) => {
          return <Company {...company} key={idx} />
        })}
      {props.text && (
        <div
          className="section-text text-justify mb-2"
          dangerouslySetInnerHTML={{ __html: props.text }}
        />
      )}
      {tagSections &&
        tagSections.map((tagSection, idx) => {
          return <TagSection {...tagSection} key={idx} />
        })}
      {props.list && <List list={props.list} />}
      {props.certifications && (
        <CertificationList certifications={props.certifications} />
      )}
      {props.iconSection && <IconList icons={props.iconSection} />}
    </div>
  )
}

export default Section
