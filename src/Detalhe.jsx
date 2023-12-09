import React, { useEffect, useState } from 'react';
import Menu from './Componentes/Menu';
import './Componentes/Menu.module.css';
import Card from './Componentes/Card'

const video = JSON.parse(localStorage.getItem("Lista")) || [];
console.log(video)
const filtraId = 
export default function Home(){

    return(
        <div>
            <Menu />
            {video.map((videos, index) => (
                            <Card key={index} voos={videos} />
                        ))}
        </div>
     );
}