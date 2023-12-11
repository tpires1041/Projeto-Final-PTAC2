import React from "react"
import {Link} from "react-router-dom"
import styles from "./Menu.module.css";

export default function Lista(){
    return (
    <div className={styles.menuBody}>
    <ul className={styles.ul}>
        <Link to ="/" style={{ textDecoration: 'none' }}><li className={styles.li}><a className={styles.a}>Home</a></li> </Link>
        <Link to ="/Destaque" style={{ textDecoration: 'none' }}><li className={styles.li}><a className={styles.a}>Destaques</a></li> </Link>
        <Link to ="/Cadastro" style={{ textDecoration: 'none' }} ><li className={styles.li}><a className={styles.a}>Adicionar Vídeo</a></li> </Link>
    </ul>
    </div>
    );
}
