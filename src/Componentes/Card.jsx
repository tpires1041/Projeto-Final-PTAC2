import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ voos}) {

    const idvideo= voos.url.slice(17);
    console.log(idvideo)
    return (
            <div className="col">
                <iframe
                    width="300"
                    height="200"
                    src={`https://www.youtube.com/embed/${idvideo}`}
                    title="Vídeo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
                <h6>{voos.titulo}</h6>
                <p>{voos.descricao}</p>
            </div>
    );
}