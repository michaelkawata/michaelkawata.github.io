import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss"
import projectData from "../../data/projects.json"

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const renderProject = (projectData) => {
    return (
      <div className="image-container">
        {
          projectData?.map((proj, idx) => {
            return (
              <div className="image-box" key={idx}>
                <img
                  className="project-image"
                  src={proj.cover}
                  alt="project" />
                <div className="content">
                  <p className="title">{proj.title}</p>
                  <h4 className="description">{proj.description}</h4>
                  <button
                    className="button"
                    onClick={() => window.open(proj.url)}>
                    View</button>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }

  return (
    <>
      <div className="container projects-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['P', 'r', 'o', 'j', 'e', ' c', 't', 's']}
            idx={15}
          />
        </h1>
        <div>{renderProject(projectData.project)}</div>
      </div>
      <Loader type="line-scale" />
    </>
  )
}

export default Projects