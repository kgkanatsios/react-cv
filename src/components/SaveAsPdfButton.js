import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import html2pdf from "html2pdf.js"

function SaveAsPdfButton(props) {
  const saveAsPdf = () => {
    let element = document.getElementById("main-cv")
    let opt = {
      filename:
        props.titleData.length > 0
          ? props.titleData.join("-") + ".pdf"
          : "cv.pdf",
      pagebreak: { mode: ["css"] },
      margin: [0, 0],
    }

    html2pdf().set(opt).from(element).save()
  }

  return (
    <div className="position-fixed border rounded-pill save-as-pdf-container overflow-hidden">
      <span
        onClick={saveAsPdf}
        className="d-block text-center bg-light px-3 py-2"
      >
        <FontAwesomeIcon className="mr-2" icon={["fas", "file-download"]} />{" "}
        Download as PDF
      </span>
    </div>
  )
}

export default SaveAsPdfButton
