import React from 'react'

const Header = () => {
  return (
    <header>
        <div className='textPresentation'>
            <h2 className='tracking-in-contract-bck'>!Hi there my name is <span>Dario Guerra Aragon</span> <br/>
              <span>I'm a Front-end Developer</span>
            </h2>
        </div>
        <div className='contactMe'>
          <img src='/imagenes/github.png' onClick={(()=>{window.open('https://github.com/darioguerraaragon', '_blank');})}/>
          <img src='/imagenes/linkedin.png' onClick={(()=>{window.open('https://www.linkedin.com/in/dario-guerra-aragon-97805421b/', '_blank');})}/>
          <img src='/imagenes/gmail.png' onClick={(()=>{window.open('mailto:darioguerraaragon@gmail.com','_blank')})}/>
          <img src='/imagenes/telegram.png' onClick={(()=>{window.open('https://t.me/56162379', '_blank');})}/>
          <img src='/imagenes/whatsapp.png' onClick={(()=>{window.open('https://wa.me/56162379', '_blank');})}/>
        </div>
    </header>
  )
}

export default Header