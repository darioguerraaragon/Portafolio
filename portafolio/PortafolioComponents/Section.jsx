import React from 'react'
import { useState } from 'react'
import Aboutme from './Pages/Aboutme'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'

const Section = () => {
  const [about, setabout] = useState(false)
  const [skills, setskills] = useState(false)
  const [projects, setprojects] = useState(false)

  return (
    <section>
      {about?<Aboutme setabout={setabout}/>:null}
      {skills?<Skills setskills={setskills}/>:null}
      {projects?<Projects setprojects={setprojects}/>:null}

      <article>
        <div className='aboutme' onClick={(()=>{setabout(true)})}><h3>About me</h3></div>
        <div className='skillsDiv' onClick={(()=>{setskills(true)})}><h3>My Skills</h3></div>
        <div className='projects' onClick={(()=>{setprojects(true)})}><h3>Projects</h3></div>
      </article>
    </section>
  )
}

export default Section