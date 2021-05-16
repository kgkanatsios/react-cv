import React from "react"
import _ from "lodash"
import Header from "./Header"
import Section from "./Section"

function App(props) {
  const pages = _.get(props.data, "pages", [])
  const header = () => {
    const headerData = _.get(props.data, "header")
    if (!headerData) return

    return <Header {...headerData} />
  }
  return pages.map((page, idx) => {
    const sections = _.get(page, "mainColumn.sections", [])
    return (
      <section key={idx} className="sheet">
        {page.showHeader && header()}
        {sections.map((section, idx) => {
          return <Section {...section} key="idx" />
        })}
      </section>
    )
  })
}

export default App
