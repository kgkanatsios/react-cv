import React from "react"
import ReactDOM from "react-dom"
import Helmet from "react-helmet"
import _ from "lodash"

import "./style/global.scss"
import App from "./components/App"
import GithubBadge from "./components/GithubBadge"
import SaveAsPdfButton from "./components/SaveAsPdfButton"
import reportWebVitals from "./reportWebVitals"

import data from "./data/data.json"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fas, fab)

const titleData = []

if (_.get(data, "header.name")) titleData.push(_.get(data, "header.name"))
if (_.get(data, "header.title")) titleData.push(_.get(data, "header.title"))

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>
        {titleData.length > 0 ? titleData.join(" | ") : "My CV by React App"}
      </title>
    </Helmet>
    <div className="p-3">
      <div id="main-cv" className="mx-auto d-table">
        <App data={data} />
      </div>
    </div>
    <GithubBadge />
    <SaveAsPdfButton titleData={titleData} />
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
