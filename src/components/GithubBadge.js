import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function GithubBadge() {
  const githubRepoUrl = process.env.REACT_APP_GITHUB_REPO_URL
  return (
    githubRepoUrl && (
      <div className="position-fixed border border-right-0 rounded-left github-badge-container overflow-hidden">
        <a
          href={githubRepoUrl}
          className="d-block text-center bg-dark p-2 text-white"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
      </div>
    )
  )
}

export default GithubBadge
