import React, { useState, useEffect } from 'react'
import style from './style.module.css'
const List = ({ items, removeItem, editItem }) => {
    return (
        <div>
            {items.map((item) => {
                const {id,title,textTeste} = item;
                return (
                    <div key={id}>
                        <h1>{title}</h1>
                        <p>{textTeste}</p>
                        <button onClick={() => editItem(id)}>Editar</button>
                        <button onClick={() => removeItem(id)}>Remover</button>
                    </div>
                )
            })}
        </div>
    )
}
const getLocalStorage = () => {
    let ApiAdc = localStorage.getItem("ApiAdc")
    if (ApiAdc) {
        return (ApiAdc = JSON.parse(localStorage.getItem("ApiAdc")))
    } else {
        return [];
    }
}
const Adicionar = () => {
    const [name, setName] = useState("")
    const [textTeste, settextTeste] = useState("")
    const [ApiAdc, setApiAdc] = useState(getLocalStorage())
    const [editId, setEditID] = useState(null)
    const [isEditing, setIdEditing] = useState(false)

    useEffect(() => {
        localStorage.setItem("ApiAdc", JSON.stringify(ApiAdc));
    }, [ApiAdc])
    const handleSubmit = (e) => {

        e.preventDefault();
        if (name && isEditing, textTeste && isEditing) {
            setApiAdc(
                ApiAdc.map((item) => {
                    if (item.id === editId) { return { ...item, title: name, textTeste: textTeste } }
                })
            );
            setName("");
            settextTeste("");
            setIdEditing(false);
        } else {
            let DadosApi = JSON.parse(localStorage.getItem("ApiAdc"))
            var Dados = JSON.stringify((parseInt(DadosApi.length)))
            var IDs = localStorage.setItem("NumDados", Dados)
            const newItem = { id: localStorage.getItem("NumDados"), title: name, textTeste: textTeste };
            setApiAdc([...ApiAdc, newItem]);
            setName("");
            settextTeste("");
        }
    };
    const removeItem = (id) => {
        setApiAdc(ApiAdc.filter((item) => item.id !== id));
    };
    const EditItem = (id) => {
        document.getElementById("Confi").style.display = "block"
        const EditItem = ApiAdc.find((item) => item.id === id);
        setIdEditing(true);
        setEditID(id);
        setName(EditItem.title);
        settextTeste(EditItem.textTeste);
    };
    const clearList = () => {
        setApiAdc([]);
    };
    function Abrir(){
        document.getElementById("Confi").style.display = "block"
    }
    function Fechar(){
        document.getElementById("Confi").style.display = "none"
    }
    return (
        <div id='BodyJr'>
            <section>
            <button onClick={Abrir}>Adicionar</button>
            <div id='Confi' className={style.Confi}>
            <button onClick={Fechar}>X</button>
                <form onSubmit={handleSubmit}>
                        <input id='User' type="text" placeholder="Nome da pagina" onChange={(e) => setName(e.target.value)} value={name} />
                        <input id='User' type="text" placeholder="Texto da pagina" onChange={(e) => settextTeste(e.target.value)} value={textTeste} />
                        <button onSubmit={handleSubmit} type="submit">
                            {isEditing ? "Editar" : "Enviar"}
                        </button>
                </form>
                </div>
                {ApiAdc.length > 0 && (
                    <div>
                        <List items={ApiAdc} removeItem={removeItem} editItem={EditItem} />
                        <button onClick={clearList}>
                            Apagar todos os itens
                        </button>
                    </div>
                )}
            </section>
        </div>
    )
}
export default Adicionar
