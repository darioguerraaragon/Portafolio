import React from 'react'
import cv from '/fileCV/cv.pdf'

const Cv = ({setcv}) => {
    const handleDescargarPDF = () => {
        const link = document.createElement("a");
        link.href = cv;
        link.download = "cv.pdf";
        link.target = "_blank";
        link.click();
    };
      
  return (
    <div className='cv-window'>
        <div className='close'><img src='/imagenes/close.png' onClick={(()=>{setcv(false)})}/></div>
        <div className='cv-img'><img src='/imagenes/cv-img (2).png'/></div>
        <div className='descarga-cv' onClick={handleDescargarPDF}><p>Download Cv</p></div>
    </div>
  )
}

export default Cv