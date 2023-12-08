import React, { useEffect, useState } from "react";

function Videos() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista") || "[]");
    const [id, setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);
    const [dadosVideo, setVideo] = useState(listaLocalStorage || []);
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [url, setUrl] = useState("");
}