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
            <div className={styles.card_container}>
            {video.map((videos, index) => (
                            <Card key={index} voos={videos} />
                        ))}
            </div>
        </div>
     );
}