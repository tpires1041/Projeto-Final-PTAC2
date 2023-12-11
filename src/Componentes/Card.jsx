import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export default function Card({ voos}) {
    const idvideo= voos.url.slice(17);
    console.log(idvideo)
    return (
            <div className="col">
                <br/>
                <iframe
                    width="300"
                    height="200"
                    src={`https://www.youtube.com/embed/${idvideo}`}
                    title="Vídeo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
                <h2>Título: {voos.titulo}</h2>
                <p>Descrição: {voos.descricao}</p>
                <Link  style={{ textDecoration: 'none' }} to={`/detalhe/${voos.id}`}>
                    <button className={styles.button}>Mais detalhes</button>
                </Link>
                <br />
            </div>
    );
}