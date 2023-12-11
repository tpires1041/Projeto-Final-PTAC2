import React, { useEffect, useState } from 'react';
import Header from './Componentes/Header';
import Menu from './Componentes/Menu';
import styles from './Componentes/Home.module.css';
import Card from './Componentes/Card';

const video = JSON.parse(localStorage.getItem("Lista")) || [];
console.log(video)
export default function Home(){

    return(
        <div className={styles.homeBody}>
            <Header />
            <Menu />
            <br />
            <h2 className={styles.h2Bemvindo}>Bem-vindo!</h2>
            <div className={styles.card_container}>
            {video.map((videos, index) => (
                            <Card key={index} voos={videos} />
                        ))}
            </div>
        </div>
     );
}