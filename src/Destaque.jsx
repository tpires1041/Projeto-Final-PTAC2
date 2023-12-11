import React, { useEffect, useState } from 'react';
import Menu from './Componentes/Menu';
import styles from './Componentes/Destaque.module.css';
import Card from './Componentes/Card'

const video = JSON.parse(localStorage.getItem("Lista")) || [];
console.log(video)
export default function Destaque(){

    return(
        <div className={styles.destaqueBody}>
            <Menu />
            <div className={styles.card_container}>
            {video.slice(-4).map((videos, index) => (
                            <Card key={index} voos={videos} />
                        ))}
            </div>
        </div>
     );
}