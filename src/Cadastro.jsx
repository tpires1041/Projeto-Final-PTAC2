import React, { useEffect, useState } from "react";

function Videos() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista") || "[]");
    const [id, setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);
    const [dadosVideo, setVideo] = useState(listaLocalStorage || []);
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [url, setUrl] = useState("");
}

function addVideo(e) {
    e.preventDefault();
    setVideo([...video, {
        id: id,
        titulo: titulo,
        descricao: descricao,
        url: url,
      },
    ]);
    setId(id + 1);
    setTitulo("");
    setDescricao("");
    setUrl("");
  }

  useEffect(() => {
    localStorage.setItem("Lista", JSON.stringify(dadosVideo));
  }, [dadosVideo]);


  return(
    <div className="container">

    <div className="form">
        <div className="flex-container">
          <div>
            <label>Titulo: </label>
            <input
              type="text"
              value={titulo}
              onChange={(e) => {
                setTitulo(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Descrição: </label>
            <input
              type="text"
              value={descricao}
              onChange={(e) => {
                setDescricao(e.target.value);
              }}
            />
          </div>
          <div>
            <label>URL: </label>
            <input
              type="text"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            />
          </div>
        </div>
    </div>

    <button className="button" onClick={addVideo}>
          Adicionar Video
        </button>
      </div>

  );