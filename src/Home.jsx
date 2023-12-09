import React, { useEffect, useState } from 'react';
import Menu from './Componentes/Menu';
import './Componentes/Menu.module.css';
import Card from './Componentes/Card';

export default function Home(){
    const [dadosVideo, setVideo] = useState([]);

    useEffect(() => {
        const listaLocalStorage = JSON.parse(localStorage.getItem("Lista") || "[]");
        setVideo(listaLocalStorage);
    }, []);

    return(
        <div>
            <Menu />
            {dadosVideo.map((video, index) => (
                <Card key={index} video={video} />
            ))}
            <Card />
        </div>
     );
}