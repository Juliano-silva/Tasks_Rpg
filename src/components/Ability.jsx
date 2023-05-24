import React, { useState, useEffect } from 'react'
import style from './style.module.css'
var Dinheiro = localStorage.getItem("Moeda")
const List = ({ items }) => {
    var array = []
    return (
        <div id='BodyJr'>
            <h1>Loja:</h1>
            {items.map((item) => {
                const { id, title,description, atk, res, int, quantidade, preco, itens, image } = item;
                var soma = parseInt(atk) + parseInt(res) + parseInt(int)
                var soma1 = parseInt(atk) + parseInt(int)
                var soma2 = parseInt(res)
                var soma3 = parseInt(atk)
                JSON.stringify(array.push(title))
                function Comprando(){
                if (Dinheiro > preco){
                    alert("Você comprou o item " + id + " " + title)
                    var ValorPago = Dinheiro - preco
                    localStorage.setItem("Moeda",parseInt(ValorPago))
                    localStorage.setItem("Comprandos",JSON.stringify(array))
                    location.reload()
                } else{
                    alert("Você não pode Comprar")
                }
            }
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
                    <div key={id} className={style.Ability}>
                        <details style={{background:Background}}>
                        <summary><h1>{id}.{title}</h1></summary>
                            <img src={image} alt="" />
                            <h1>{itens + " " + Raridade + ":"}</h1>
                            <h2>{"ATK "+atk}</h2>
                            <h2>{"RES "+res}</h2>
                            <h2>{"INT "+int}</h2>
                            <h3>R${preco}</h3>
                            <h4>Quantidade de itens: {quantidade}x</h4>
                            <p>{description}</p>
                            <button onClick={Comprando}>Comprar</button>
                        </details>
                    </div>
                )
            })}
        </div>
    )
}
const getLocalStorage = () => {
    let store = localStorage.getItem("store")
    if (store) { return (store = JSON.parse(localStorage.getItem("store"))) } else { return []; }
}
const BodyCard = () => {
    const [store] = useState(getLocalStorage())
    useEffect(() => {
        localStorage.setItem("ApiAdc", JSON.stringify(store));
    }, [store])
    return (<div>{store.length > 0 && (<div><List items={store} /></div>)}</div>)
}
export default BodyCard