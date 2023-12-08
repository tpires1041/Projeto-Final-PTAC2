import React from "react";
import "/Cadastro.jsx";

function YoutubeEmbed(props) {
    const { videoId } = props;
  
    return (
      <iframe
        width="560"
        height="315"
        src={url}
        title={titulo}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    );
  }
  
  export default YoutubeEmbed;