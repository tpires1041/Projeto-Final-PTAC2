import React, { useEffect, useState } from "react";
import styles from "./Componentes/Cadastro.module.css";
import Menu from './Componentes/Menu.jsx';

export default function Videos() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista") || "[]");
    const [id, setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);
    const [dadosVideo, setVideo] = useState(listaLocalStorage || []);
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [url, setUrl] = useState("");
    const [canal, setCanal] = useState("");
    const [data, setData] = useState("");
    const [aeronave, setAeronave] = useState("");



function addVideo(e) {
    e.preventDefault();
    setVideo([...dadosVideo, {
        id: id,
        titulo: titulo,
        descricao: descricao,
        url: url,
        canal: canal,
        data: data,
        aeronave: aeronave,
      },
    ]);
    setId(id + 1);
    setTitulo("");
    setDescricao("");
    setUrl("");
    setCanal("");
    setData("");
    setAeronave("");
  }

  useEffect(() => {
    localStorage.setItem("Lista", JSON.stringify(dadosVideo));
  }, [dadosVideo]);


  return (
    <div>
    <Menu />
    <div className={styles.cadastro}>
    <div className={styles.cadastroBody}>
    <div className={styles.container}>
    

    <div className={styles.form}>
        <div className={styles.flex_container}>
          <div>
            <label>Título: </label>
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
          <div>
            <label>Canal: </label>
            <input
              type="text"
              value={canal}
              onChange={(e) => {
                setCanal(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Data: </label>
            <input
              type="text"
              value={data}
              onChange={(e) => {
                setData(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Aeronave: </label>
            <input
              type="text"
              value={aeronave}
              onChange={(e) => {
                setAeronave(e.target.value);
              }}
            />
          </div>
        </div>
    </div>

    <button className={styles.button} onClick={addVideo}>
          Adicionar Video
        </button>
      </div>
      </div>
      
</div>
</div>
  );
}