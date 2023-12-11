import React, { useEffect, useState } from 'react';
import Menu from './Componentes/Menu';
import styles from './Componentes/Detalhe.module.css';
import Card from './Componentes/Card';
import { useParams } from 'react-router-dom';

export default function Detalhe(){
    const {id} = useParams()
    const video = JSON.parse(localStorage.getItem("Lista")) || [];
    console.log(video)
    const filtraId = video.find((objeto) => objeto.id == id) || null;
    console.log(filtraId)
    return(
        <div>
            <Menu />
            <div className={styles.card_container}>
                <iframe
                    width="300"
                    height="200"
                    src={`https://www.youtube.com/embed/${filtraId.url.slice(17)}`}
                    title="Vídeo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
                <h2>Título: {filtraId.titulo}</h2>
            </div>
        </div>
     );
}