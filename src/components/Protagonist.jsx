import React from "react";
import style from './style.module.css'
var Corpo = document.getElementById("Bodys")
var Conteudo = localStorage.getItem("PersonagemPrincipal")
var Comprandos = localStorage.getItem("Comprandos")
var CompraRe = Comprandos.replace("[","").replace("]","").replace(/["]/g,"")
export default function Protagonist() {
    return (
        <div>
            <div className={style.Protagonist}><h1 onClick={AbrirP}>+</h1></div>
            <div id="StatusInput" className={style.ConfiCentralizada}>
                <button onClick={FecharP}>✖</button>
                <h1 style={{ marginTop: "5vh" }}>Criar um Personagem</h1>
                <form >
                    <input type="text" id="Nome" placeholder="Digite seu nome" />
                    <input type="text" id="Icone" placeholder="Insira seu icone" />
                    <input type="text" id="História" placeholder="Insira sua História" />
                    <button onClick={Salvar} className={style.BtnEnviar}>Enviar</button>
                </form>
            </div>
            <div id="Status" className={style.ConfiCentralizada}>
                <button className={style.FecharPP} onClick={FecharPP}>✖</button>
                <h1>Ficha do Personagem</h1>
                <div className={style.ConteúdosFicha}>
                <img src={JSON.parse(Conteudo)[1]} alt="" />
                    <h2>{JSON.parse(Conteudo)[0]}</h2>
                    <p>{JSON.parse(Conteudo)[2]}</p>
                    <h3>Lvl ???</h3>
                    <h5>{CompraRe}</h5>
                </div>
            </div>
        </div>
    )
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