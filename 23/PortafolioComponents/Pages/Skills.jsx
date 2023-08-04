import React from 'react'

const Skills = ({setskills}) => {
  return (
    <div className='Info'>
        <div className='close'>
            <img src='/imagenes/close.png' onClick={(()=>{setskills(false)})}/>
        </div>
        <div className='containerSkills'>
          <div className='imageSkills'><img src='/imagenes/skills.jpg'/></div>
          <div className='mySkills'>
            <div>
              <img src='/imagenes/html-5.png'/>
              <p>HTML5</p>
            </div>
            <div>
              <img src='/imagenes/css-3.png'/>
              <p>Css3</p>
            </div>
            <div>
              <img src='/imagenes/js.png'/>
              <p>Javascript</p>
            </div>
            <div>
              <img src='/imagenes/bootstrap.png'/>
              <p>Bootstrap</p>
            </div>
            <div>
              <img src='/imagenes/physics.png'/>
              <p>React</p>
            </div>
            <div>
              <img src='/imagenes/typescript.png'/>
              <p>Typescript</p>
            </div>
            <div>
              <img src='/imagenes/git.png'/>
              <p>Git</p>
            </div>
            <div>
              <img src='/imagenes/github.png'/>
              <p>Github</p>
            </div>
            <div>
              <img src='/imagenes/nodejs.png'/>
              <p>Node.js</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Skills