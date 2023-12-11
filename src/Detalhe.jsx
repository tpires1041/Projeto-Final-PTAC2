import React, { useEffect, useState } from 'react';
import Menu from './Componentes/Menu';
import styles from './Componentes/Detalhe.module.css';
import { useParams } from 'react-router-dom';
import Header from './Componentes/Header';

export default function Detalhe(){
    const {id} = useParams()
    const video = JSON.parse(localStorage.getItem("Lista")) || [];
    console.log(video)
    const filtraId = video.find((objeto) => objeto.id == id) || null;
    console.log(filtraId)
    return(
        <div className={styles.detalheBody}>
            <Header />
            <Menu />
            <br/>
            <h2 className={styles.h1Detalhes}>Detalhes</h2>
            <div className={styles.card_container}>
                <br/>
                <br/>
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
                <p>Descrição: {filtraId.descricao}</p>
                <br/>
                <h2>Canal: {filtraId.canal}</h2>
                <br/>
                <h2>Data: {filtraId.data}</h2>
                <br/>
                <h2>Aeronave: {filtraId.aeronave}</h2>
            </div>
        </div>
     );
}