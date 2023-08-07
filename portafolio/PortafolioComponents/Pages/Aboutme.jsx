import React from 'react'

const Aboutme = ({setabout}) => {
  return (
    <div className='Info'>
        <div className='close'>
            <img src='/imagenes/close.png' onClick={(()=>{setabout(false)})}/>
        </div>

        <div className='containerAboutme'>
          <div className='imgAboutme'><img src='/imagenes/aboutme.jpg'/></div>
          <div className='contentAboutme'>
            <div className='textAboutme'>
              <p>
                I am a passionate frontend developer with a strong commitment to excellence in every project I work on. My main goal is to create stunning and functional web experiences that captivate users. 
                  Since diving into the world of web development, I have constantly sought opportunities to learn and grow. I am excited to stay up-to-date with the latest technologies and trends in the frontend development field. My ambition is to continue expanding my knowledge and skills to deliver innovative and high-quality solutions. 
                  Every project I get involved in is an opportunity to express my passion for web development. I take pride in leaving my mark in every line of code and ensuring that every detail is carefully designed and executed. My dedication and commitment are reflected in delivering outstanding results that exceed my clients' expectations. 
                  I am a serious and dedicated professional, always ready to take on new challenges and work as a team to achieve established goals. I strive to understand my clients' needs and requirements in order to provide effective and satisfactory solutions. 
                  If you are looking for a passionate, dedicated, and committed frontend developer, I am here to help bring your digital ideas and projects to life!
              </p>
            </div>

            <div className='myProfessionalSkills'>
              <figure>
                <img src='/imagenes/light-bulb.png'/>
                <figcaption>Curiosity</figcaption>
              </figure>
              <figure>
                <img src='/imagenes/design-thinking.png'/>
                <figcaption>Creativity</figcaption>
              </figure>
              <figure>
                <img src='/imagenes/coding.png'/>
                <figcaption>Learning</figcaption>
              </figure>
              <figure>
                <img src='/imagenes/responsibility.png'/>
                <figcaption>Responsibility</figcaption>
              </figure>
              <figure>
                <img src='/imagenes/united.png'/>
                <figcaption>TeamWork</figcaption>
              </figure>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Aboutme