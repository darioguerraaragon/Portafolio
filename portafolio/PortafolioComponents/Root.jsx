import React from 'react'
import Header from './Header'
import Section from './Section'
import { useState } from 'react'
import Cv from './Pages/Cv'

const Root = () => {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [dragging, setDragging] = useState(false);
  //
  const [cv, setcv] = useState(false)

  const handleMouseDown = (e) => {
    e.preventDefault();
    setDragging(true);
    setPosX(e.clientX);
    setPosY(e.clientY);
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    if (!dragging) return;
    const deltaX = e.clientX - posX;
    const deltaY = e.clientY - posY;
    setPosX(e.clientX);
    setPosY(e.clientY);
    const div = document.getElementById("miDiv");
    div.style.top = div.offsetTop + deltaY + "px";
    div.style.left = div.offsetLeft + deltaX + "px";
  };

  const handleMouseUp = () => {
    setDragging(false);
  };
  //
  return (
    <div>  
      {cv?<Cv setcv={setcv}/>:null}

      <div className='cv-float heartbeat' id='miDiv'
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onClick={(()=>{setcv(true)})}
      >
        <p><b>Cv</b></p>
      </div>
        <Header/>
        <Section/>
    </div>
  )
}
export default Root