import React, { useState } from 'react'
import "./playBtn.css"
import Modal from './Modal'

function PlayBtn({movie}) {
  const [modal,setModal]=useState(false)
  const toggleModel=()=>{
    setModal(!modal)
  }
  return (
   <>
    <div className={`trailer d-flex align-items-center justify-content-center ${movie.active ? "active" : undefined}`}>
    <a href="#" className="playBtn" onClick={toggleModel}>
    <ion-icon name="play-outline"></ion-icon>
    </a>
    <p>watch Trailer</p>
</div>
{
  movie.active && <Modal movie={movie} status={modal} toggleModel={toggleModel}/>
}

</>
  )
}

export default PlayBtn
