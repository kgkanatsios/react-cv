import React from "react"
import _ from "lodash"
import Header from "./Header"

function App(props) {
  return (
    <section className="sheet">
      {_.get(props.data, "header") && (
        <Header
          name={_.get(props.data, "header.name")}
          title={_.get(props.data, "header.title")}
          links={_.get(props.data, "header.links")}
        />
      )}
    </section>
  )
}

export default App
