import React, { useEffect, useState } from 'react';
import Menu from './Componentes/Menu';
import './Componentes/Menu.module.css';
import Card from './Componentes/Card';

export default function Home(){
    const [dadosVideo, setVideo] = useState([]);

    

    return(
        <div>
            <h1 id='titulo'>Vídeos</h1>
            <Menu />
            <Card />
        </div>
     );
}