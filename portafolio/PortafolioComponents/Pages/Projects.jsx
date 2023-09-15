import React from 'react'

const Projects = ({setprojects}) => {
  return (
    <div className='Info'>
        <div className='close'>
            <img src='/imagenes/close.png' onClick={(()=>{setprojects(false)})}/>
        </div>
        <div className='containerProjects'>
          <div className='projectsCards '>
            <div className='video'><video src='/videosprojects/proacademy.mp4' autoPlay loop/></div>
            <div className='infoproject'>
              <h2>ProAcademy</h2>
              <img src='/imagenes/github.png' onClick={(()=>{window.open('https://github.com/darioguerraaragon/ProAcademy', '_blank');})}/>
              <div className='projectDescription'>
                <p>
                  A web application developed using HTML, CSS, JavaScript, and Bootstrap. This project has been created with the aim of automating the enrollment process in a language school that offers various courses. The user interface has been designed in an attractive and visually appealing manner, allowing for intuitive interaction with users. 
                  This application provides a seamless and efficient experience for students interested in enrolling in the school's courses. By leveraging modern web technologies, a user-friendly enrollment system has been implemented, accessible from any internet-connected device. 
                  Furthermore, special attention has been given to the visual design, ensuring that the project stands out for its attractive aesthetics. Visual elements and subtle animations add a touch of elegance to the project, enhancing the user experience.
                </p>
              </div>
            </div>
          </div>

          <div className='projectsCards'>
            <div className='video'><video src='/videosprojects/piedra.mp4' autoPlay loop/></div>
            <div className='infoproject'>
              <h2>Rock-paper-scissors</h2>
              <img src='/imagenes/github.png' onClick={(()=>{window.open('https://github.com/darioguerraaragon/rock2-paper2-scissors', '_blank');})}/>
              <div className='projectDescription'>
                <p>
                  Web application developed using HTML, CSS, JavaScript. This project revolves around the popular and classic game of Rock, Paper, Scissors, providing users with everything they need to play it on their devices.  
                  The application is fully responsive, ensuring that it can be accessed and enjoyed on various screen sizes and devices. Users can easily navigate through the game and interact with the different options available.  
                  One of the notable features of the project is the ability to customize the background, allowing users to personalize their gaming experience. Additionally, the application keeps track of the players' scores, providing a competitive element to the game.  
                </p>
              </div>
            </div>
          </div>

          <div className='projectsCards'>
            <div className='video'><video src='/videosprojects/passGen.mp4' autoPlay loop/></div>
            <div className='infoproject'>
              <h2>PasswordGenerator</h2>
              <img src='/imagenes/github.png' onClick={(()=>{window.open('https://github.com/darioguerraaragon/Password-Generator', '_blank');})}/>
              
              <div className='projectDescription'>
                <p>
                  A highly useful web application developed using HTML, CSS, and JavaScript. This project is a secure password generator that offers users the ability to determine the desired number of characters for their password and generate multiple passwords if desired. 
                  The application provides a simple and intuitive interface where users can specify the desired length of their password. With just a few clicks, the generator creates strong and secure passwords that can be used for various purposes, such as online accounts or sensitive data protection. 
                  The project showcases your skills in web development, demonstrating your ability to create a functional and user-friendly application. By providing users with the flexibility to customize the length of their passwords and generate multiple options, it offers a convenient solution for individuals seeking strong password generation. 
                </p>
              </div>
            </div>
          </div>
          
          <div className='projectsCards'>
            <div className='video'><video src='/videosprojects/movieapp.mp4' autoPlay loop/></div>
            <div className='infoproject'>
              <h2>MovieApp</h2>
              <img src='/imagenes/github.png' onClick={(()=>{window.open('https://github.com/darioguerraaragon/MovieWeb', '_blank');})}/>
              
              <div className='projectDescription'>
                <p>
                  A web application for movies and series developed using HTML, CSS, JavaScript, and React. This application allows users to find specific movies, popular movies, and trending content of the day or week. It provides a rating system for movies, a beautiful and intuitive interface, general descriptions of movies and series, and a button that allows users to watch the trailer for each movie or series. Additionally, the application displays information such as release date, duration, and genres of each movie or series. 
                  By leveraging web technologies such as HTML, CSS, JavaScript, and React, you have created a dynamic and interactive user experience. The use of React allows for efficient rendering and seamless updates of the interface, providing a smooth and responsive browsing experience for users. The combination of HTML, CSS, and JavaScript ensures a visually appealing design, intuitive navigation, and enhanced functionality. 
                  Overall, me project demonstrates me proficiency in web development, showcasing your ability to create a feature-rich and visually appealing application using modern web technologies. It provides users with a convenient and enjoyable platform to explore and discover movies and series.
                </p>
              </div>
            </div>
          </div>

          <div className='projectsCards'>
            <div className='video'><video src='/videosprojects/newsapp.mp4' autoPlay loop/></div>
            <div className='infoproject'>
              <h2>NewsApp</h2>
              <img src='/imagenes/github.png' onClick={(()=>{window.open('https://github.com/darioguerraaragon/newsApp', '_blank');})}/>
              
              <div className='projectDescription'>
                <p>
                  A news website that provides real-time updates on various topics. It utilizes technologies such as HTML, CSS, JavaScript, React, and Node.js to create a system that sends email notifications to users when there is news of their interest. The website also allows users to explore relevant news from different countries and categories, all while enjoying a beautiful and intuitive interface. 
                  By leveraging HTML, CSS, and JavaScript, you have created a visually appealing and interactive user interface for the news website. The use of React and Node.js enables dynamic content updates and efficient handling of user notifications. With the email notification system, users can stay informed about news that matches their interests, enhancing their overall browsing experience. 
                  Furthermore, the integration of Node.js allows for server-side functionality, ensuring seamless communication between the website and the email notification system. This enables timely delivery of news updates to users' email inboxes. 
                </p>
              </div>
            </div>
          </div>

          <div className='projectsCards'>
            <div className='video'><video src='/videosprojects/' autoPlay loop/></div>
            <div className='infoproject'>
              <h2></h2>
              <img src='/imagenes/github.png'/>
              
              <div className='projectDescription'>
                <p></p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects