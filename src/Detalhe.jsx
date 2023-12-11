import React, { useEffect, useState } from 'react';
import Menu from './Componentes/Menu';
import './Componentes/Menu.module.css';
import Card from './Componentes/Card'
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
            <Card voos={filtraId}/>
            <h2>{filtraId.canal}</h2>
        </div>
     );
}