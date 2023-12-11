import React from "react";
import styles from './Header.module.css';


export default function Header() {
    return (
        <div className={styles.navbar}>
            <h1 className={styles.titulo}>Portal Aviação</h1>
        </div>
    )
}