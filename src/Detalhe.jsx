import React, { useEffect, useState } from 'react';
import Menu from './Componentes/Menu';
import './Componentes/Menu.module.css';
import Card from './Componentes/Card'

const video = JSON.parse(localStorage.getItem("Lista")) || [];
console.log(video)
const filtraId = video.find((objeto) => objeto.id == id) || null;
export default function Detalhe(){

    return(
        <div>
            <Menu />
            <Card voos={filtraId}/>
        </div>
     );
}