import React, { useState, useEffect } from 'react'
import style from './style.module.css'
const List = ({ items, removeItem, editItem }) => {
    return (
        <div>
            {items.map((item) => {
                const {id,title} = item;
                return (
                    <div key={id}>
                        <h1>{title}</h1>
                        <button onClick={() => editItem(id)}>Editar</button>
                        <button onClick={() => removeItem(id)}>Remover</button>
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
    const [store, setStore] = useState(getLocalStorage())
    const [editId, setEditID] = useState(null)
    const [isEditing, setIdEditing] = useState(false)

    useEffect(() => {
        localStorage.setItem("store", JSON.stringify(store));
    }, [store])
    const handleSubmit = (e) => {

        e.preventDefault();
        if (name && isEditing) {
            setStore(
                store.map((item) => {
                    if (item.id === editId) { return { ...item, title: name} }
                })
            );
            setName("");
            setIdEditing(false);
        } else {
            let DadosApi = JSON.parse(localStorage.getItem("store"))
            var Dados = JSON.stringify((parseInt(DadosApi.length)))
            var IDs = localStorage.setItem("NumDados", Dados)
            const newItem = { id: localStorage.getItem("NumDados"), title: name};
            setStore([...store, newItem]);
            setName("");
        }
    };
    const removeItem = (id) => {
        setStore(store.filter((item) => item.id !== id));
    };
    const EditItem = (id) => {
        document.getElementById("ConfiStore").style.display = "block"
        const EditItem = store.find((item) => item.id === id);
        setIdEditing(true);
        setEditID(id);
        setName(EditItem.title);
    };
    const clearList = () => {
        setStore([]);
    };
    function Abrir(){
        document.getElementById("ConfiStore").style.display = "block"
    }
    function Fechar(){
        document.getElementById("ConfiStore").style.display = "none"
    }
    return (
        <div id='BodyJr'>
            <section>
            <button onClick={Abrir}>Adicionar</button>
            <div id='ConfiStore' className={style.Confi}>
            <button onClick={Fechar}>X</button>
                <form onSubmit={handleSubmit}>
                        <input id='User' type="text" placeholder="Nome da pagina" onChange={(e) => setName(e.target.value)} value={name} />
                        <button onSubmit={handleSubmit} type="submit">
                            {isEditing ? "Editar" : "Enviar"}
                        </button>
                </form>
                </div>
                {store.length > 0 && (
                    <div>
                        <List items={store} removeItem={removeItem} editItem={EditItem} />
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
