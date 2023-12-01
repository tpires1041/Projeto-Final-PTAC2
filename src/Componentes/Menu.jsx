import React from "react"
import {Link} from "react-router-dom"

export default function Lista(){
    return (
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#news">Destaques</a></li> 
        <Link to ="/Cadastro"><li>Adicionar Vídeo</li> </Link>
    </ul>
    );
}
