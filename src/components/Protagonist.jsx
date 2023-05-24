import React, { useState } from "react";
import style from './style.module.css'
var Corpo = document.getElementById("Bodys")
let Conteudo = localStorage.getItem("PersonagemPrincipal")
var Comprandos = localStorage.getItem("Comprandos")
var Names = Conteudo
export default function Protagonist() {
    return (
        <div>
            <button className={style.AbrirSide} onClick={AbrirSidebar}>≡</button>
            <h1 className={style.TituloSide}>Tasks RPG</h1>
            <div id="Sidebar" className={style.Sidebar}>
                <button onClick={FecharSidebar}>≡</button>
                <div className={style.Protagonist}><h1 onClick={AbrirP}>+</h1></div>
            </div>
            <div id="StatusInput" className={style.ConfiCentralizada}>
                <button onClick={FecharP}>✖</button>
                <h1 style={{ marginTop: "5vh" }}>Criar um Personagem</h1>
                <form >
                    <input required type="text" id="Nome" placeholder="Digite seu nome" />
                    <input required type="text" id="Icone" placeholder="Insira seu icone" />
                    <input required type="text" id="História" placeholder="Insira sua História" />
                    <button onClick={Salvar} className={style.BtnEnviar}>Enviar</button>
                </form>
            </div>
            <div id="Status" className={style.ConfiCentralizada}>
                <button className={style.FecharPP} onClick={FecharPP}>✖</button>
                <h1>Ficha do Personagem</h1>
                <div className={style.ConteúdosFicha}>
                    <img src={JSON.parse(Names)} alt="" />
                    <h2>{JSON.parse(Names)}</h2>
                    <p>{JSON.parse(Names)}</p>
                    <h3>Lvl ???</h3>
                    <h5>{Comprandos}</h5>
                </div>
            </div>
        </div>
    )
}
function FecharSidebar(){
    document.getElementById("Sidebar").style.display = "none"
    document.getElementById("Compannions").style.display = "none"
    document.getElementById("CompanionsBUTTON").style.display = "none"
}
function AbrirSidebar(){
    document.getElementById("Sidebar").style.display = "block"
    document.getElementById("Compannions").style.display = "block"
    document.getElementById("CompanionsBUTTON").style.display = "block"
}
function AbrirP() { document.getElementById("StatusInput").style.display = "block" }
function FecharPP() { document.getElementById("Status").style.display = "none" }
function FecharP() { document.getElementById("StatusInput").style.display = "none" }
function Salvar() {
    var Nome = document.getElementById("Nome").value
    var Icone = document.getElementById("Icone").value
    var História = document.getElementById("História").value
    var array = [Nome, Icone, História]
    localStorage.setItem("PersonagemPrincipal", JSON.stringify(array))
}
Corpo.addEventListener("keypress", function (evento) {
    var Status = document.getElementById("Status")
    if (evento.code === "Numpad2") {
        Status.style.display = "block"
    }
})