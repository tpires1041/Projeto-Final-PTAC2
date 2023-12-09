import React from "react";
import styles from "./Card.module.css";

function YoutubeEmbed(props) {
    const { videoId } = props;
  
    return (
      <div className={styles.iframe}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/QdBZY2fkU-0?si=qRyN5e9icC9JK_nc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      </div>
    );
  }
  
  export default YoutubeEmbed;