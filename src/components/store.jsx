import React, { useState, useEffect } from 'react'
import style from './style.module.css'
import MoedaBr from "../Arquivos/Bronze.png"
var Corpo = document.getElementById("Bodys")
var Moeda = localStorage.getItem("Moeda")
if (Moeda === "NaN"){
    var Num = Moeda = 0
}else{
    var Num = parseInt(Moeda)
}
localStorage.setItem("Moeda",parseInt(Num))
const List = ({ items, removeItem}) => {
    return (
        <div>
            {items.map((item) => {
                const { id, title, description, atk, res, int, quantidade, preco, itens, image } = item;
                var soma = parseInt(atk) + parseInt(res) + parseInt(int)
                var soma1 = parseInt(atk) + parseInt(int)
                var soma2 = parseInt(res)
                var soma3 = parseInt(atk)
                if (soma <= 150 || soma1 <= 150 || soma2 <= 150 || soma3 <= 150){
                    var Background = "greenyellow"
                    var Raridade = "Comum"
                }else if(soma <= 500 || soma1 <= 500 || soma2 <= 500 || soma3 <= 500){
                    var Background = "green"
                    var Raridade = "Incomun"
                }else if(soma <= 1000 || soma1 <= 1000 || soma2 <= 1000 || soma3 <= 1000){
                    var Background = "blue"
                    var Raridade = "Rara"
                }else if(soma <= 2500 || soma1 <= 2500 || soma2 <= 2500 || soma3 <= 2500){
                    var Background = "red"
                    var Raridade = "Fúria"
                }else if(soma >= 5000 || soma1 >= 5000 || soma2 >= 5000 || soma3 >= 5000){
                    var Background = "purple"
                    var Raridade = "Legendário"
                }else if(soma >= 10000 || soma1 >= 10000 || soma2 >= 1000 || soma3 >= 1000){
                    var Background = "goldenrod"
                    var Raridade = "ULTIMATE"
                }else if(soma >= 100000 || soma1 >= 100000 || soma2 >= 100000 || soma3 >= 100000){
                    var Background = "red"
                    var Raridade = "???"
                }
                return (
                    <div key={id} className={style.Store}>
                        <details style={{background:Background}}>
                            <summary><h1>{title}</h1></summary>
                            <img src={image} alt="" />
                            <h1>{itens + " " + Raridade + ":"}</h1>
                            <h2>{"ATK "+atk}</h2>
                            <h2>{"RES "+res}</h2>
                            <h2>{"INT "+int}</h2>
                            <h3>R${preco}</h3>
                            <h4>Quantidade de itens: {quantidade}x</h4>
                            <p>{description}</p>
                            <button onClick={() => removeItem(id)}>🗑️</button>
                        </details>
                    </div>
                )
            })}
        </div>
    )
}
const getLocalStorage = () => {
    let store = localStorage.getItem("store")
    if (store) {
        return (store = JSON.parse(localStorage.getItem("store")))
    } else {
        return [];
    }
}
const Adicionar = () => {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [atk, setATK] = useState("")
    const [itens, setItens] = useState("")
    const [res, setRES] = useState("")
    const [int, setINT] = useState("")
    const [preco, setPreco] = useState("")
    const [quantidade, setQuantidade] = useState("")
    const [description, setDescription] = useState("")
    const [store, setStore] = useState(getLocalStorage())
    const [editId, setEditID] = useState(null)
    const [isEditing, setIdEditing] = useState(false)

    useEffect(() => {
        localStorage.setItem("store", JSON.stringify(store));
    }, [store])
    function Selectio() {
        var selection = document.getElementById("Selection")
        var atk = document.getElementById("Atk")
        var res = document.getElementById("Res")
        var int = document.getElementById("Int")
        var Quantidade = document.getElementById("Quantidade")
        var Image = document.getElementById("Image")
        var value = selection.options[selection.selectedIndex].value
        localStorage.setItem("Escolha", "Arma")
        Quantidade.style.display = "block"
        res.style.display = "block"
        Image.style.display = "none"
        int.style.display = "block"
        atk.style.display = "block"
        if (value === "Arma") {
            Quantidade.style.display = "block"
            res.style.display = "block"
            Image.style.display = "none"
            int.style.display = "block"
            atk.style.display = "block"
            localStorage.setItem("Escolha", "Arma")
        }
        else if (value === "Abilidade") {
            Quantidade.style.display = "none"
            res.style.display = "none"
            Image.style.display = "none"
            localStorage.setItem("Escolha", "Abilidade")
        }
        else if (value === "Magia") {
            Quantidade.style.display = "none"
            res.style.display = "none"
            Image.style.display = "none"
            localStorage.setItem("Escolha", "Magia")
        }
        else if (value === "Roupa") {
            Quantidade.style.display = "block"
            res.style.display = "block"
            Image.style.display = "none"
            atk.style.display = "none"
            int.style.display = "none"
            localStorage.setItem("Escolha", "Roupa")
        } else {
            Quantidade.style.display = "block"
            Image.style.display = "block"
            res.style.display = "none"
            atk.style.display = "block"
            int.style.display = "none"
            localStorage.setItem("Escolha", "Pet")
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        var Escolha = localStorage.getItem("Escolha")
        if (name && isEditing, itens && isEditing, atk && isEditing, res && isEditing, int && isEditing, description && isEditing, quantidade && isEditing, preco && isEditing, image && isEditing) {
            setStore(
                store.map((item) => {
                    if (item.id === editId) { return { ...item, title: name, itens: Escolha, image: image, atk:atk, res:res, int:int,description: description, preco: preco, quantidade: quantidade } }
                })
            );
            setName("");
            setItens("")
            setImage("");
            setATK("");
            setRES("");
            setINT("");
            setPreco("");
            setQuantidade("");
            setDescription("");
            setIdEditing(false);
        } else {
            let DadosApi = JSON.parse(localStorage.getItem("store"))
            var Dados = JSON.stringify((parseInt(DadosApi.length)))
            var IDs = localStorage.setItem("NumDados2", Dados)
            var Escolha = localStorage.getItem("Escolha")
            const newItem = { id: localStorage.getItem("NumDados2"), title: name, itens: Escolha, image: image, preco: preco, quantidade: quantidade, atk:atk, res:res, int:int, description: description };
            setStore([...store, newItem]);
            setName("");
            setItens("");
            setImage("");
            setATK("");
            setRES("");
            setQuantidade("");
            setPreco("");
            setINT("");
            setDescription("");
        }
    };
    const removeItem = (id) => {
        setStore(store.filter((item) => item.id !== id));
    };

    function Abrir() {
        document.getElementById("ConfiStore").style.display = "block"
    }
    function Fechar() {
        document.getElementById("ConfiStore").style.display = "none"
    }
    Corpo.addEventListener("keypress",function(evento){
        var Carteira = document.getElementById("Carteira")
        if(evento.code === "Numpad1"){
            Carteira.style.display = "block"
        }
    })
    function FecharCarteira(){
        Carteira.style.display = "none"
    }
    function Didin(){
        localStorage.setItem("Moeda",parseInt(Num)+50)
    }
    return (
        <div id='BodyJr'>
            <button onClick={Abrir} className={style.BtnAdd}>Adicionar um item</button>
            <div id='ConfiStore' className={style.ConfiCentralizada}>
                <button onClick={Fechar}>✖</button>
                <h1>Criando um Item</h1>
                <form onSubmit={handleSubmit}>
                    <select required id='Selection' onChange={Selectio}>
                        <option value="Arma">Arma</option>
                        <option value="Abilidade">Abilidade</option>
                        <option value="Magia">Mágica</option>
                        <option value="Roupa">Roupa</option>
                        <option value="Pet">Pet</option>
                    </select>
                    <input required id='Name' type="text" placeholder="Nome do Item" onChange={(e) => setName(e.target.value)} value={name} />
                    <input  id='Image' type="text" placeholder="Image do Item" onChange={(e) => setImage(e.target.value)} value={image} />
                    <input id='Atk' type="number" placeholder="ATK do Item" onChange={(e) => setATK(e.target.value)} value={atk} />
                    <input id='Res' type="number" placeholder="RES do Item" onChange={(e) => setRES(e.target.value)} value={res} />
                    <input  id='Int' type="number" placeholder="INT do Item" onChange={(e) => setINT(e.target.value)} value={int} />
                    <input required id='Preco' type="number" placeholder="Preço do Item" onChange={(e) => setPreco(e.target.value)} value={preco} />
                    <input  id='Quantidade' type="number" placeholder="Quantidade do Item" onChange={(e) => setQuantidade(e.target.value)} value={quantidade} />
                    <textarea required id='Descrição' placeholder="Descrição do Item" onChange={(e) => setDescription(e.target.value)} value={description} />
                    <button onClick={Didin} className={style.BtnEnviar} onSubmit={handleSubmit} type="submit">
                        Enviar
                    </button>
                </form>
            </div>
            {store.length > 0 && (
                <div>
                    <List items={store} removeItem={removeItem} />
                </div>
            )}
             <div id='Carteira' className={style.Carteira}>
                <button onClick={FecharCarteira}>✖</button>
                <h1>Carteira</h1>
                <div><img src={MoedaBr} alt="" /> <h1>R$ {Moeda}</h1> </div>
            </div>
        </div>
    )
}
export default Adicionar
