import React from "react";
import styles from "./Card.module.css";

function Card( {video} ) {
  const video = JSON.parse(localStorage.getItem("Video"));
  return (
    <div className="card">
      <h2>{video.titulo}</h2>
    </div>
  )
}

export default Card;