import React, { useState, useEffect } from 'react'
import style from './style.module.css'
const List = ({ items, removeItem }) => {
    return (
        <div className={style.CompanioBody}>
            {items.map((item) => {
                const { id, title, spriteC, spriteDesciption,lvl } = item;
                return (
                    <div className={style.Companions} key={id}>
                            <img src={spriteC} alt="" />
                            <h1>{title}</h1>
                            <p>{spriteDesciption}</p>
                            <h5>Lvl {lvl}</h5>
                            <button onClick={() => removeItem(id)}>🗑️</button>
                    </div>
                )
            })}
        </div>
    )
}
const getLocalStorage = () => {
    let CompanionApi = localStorage.getItem("CompanionApi")
    if (CompanionApi) {
        return (CompanionApi = JSON.parse(localStorage.getItem("CompanionApi")))
    } else {
        return [];
    }
}
const Companions = () => {
    const [name, setName] = useState("")
    const [lvl, setLvl] = useState("")
    const [spriteC, setSpriteC] = useState("")
    const [spriteDesciption, setSpriteDesciption] = useState("")
    const [CompanionApi, setCompanionApi] = useState(getLocalStorage())
    const [editId, setEditID] = useState(null)
    const [isEditing, setIdEditing] = useState(false)

    useEffect(() => {
        localStorage.setItem("CompanionApi", JSON.stringify(CompanionApi));
    }, [CompanionApi])
    const handleSubmit = (e) => {

        e.preventDefault();
        if (name && isEditing, spriteC && isEditing, spriteDesciption && isEditing,lvl && isEditing) {
            setCompanionApi(
                CompanionApi.map((item) => {
                    if (item.id === editId) { return { ...item, title: name, spriteC: spriteC, spriteDesciption: spriteDesciption,lvl:lvl } }
                })
            );
            setName("");
            setLvl("");
            setSpriteC("");
            setSpriteDesciption("")
            setIdEditing(false);
        } else {
            var Random = Math.floor(Math.random() * 10000000)
            var Lvls = Random
            let DadosApi = JSON.parse(localStorage.getItem("CompanionApi"))
            var Dados = JSON.stringify((parseInt(DadosApi.length)))
            var IDs = localStorage.setItem("NumCompanion", Dados)
            const newItem = { id: localStorage.getItem("NumCompanion"), title: name, spriteC: spriteC, spriteDesciption: spriteDesciption,lvl:Lvls };
            if (Dados >= 14) {
                return false
            }
            setCompanionApi([...CompanionApi, newItem]);
            setName("");
            setLvl("");
            setSpriteDesciption("")
            setSpriteC("")
        }
    };
    const removeItem = (id) => {
        setCompanionApi(CompanionApi.filter((item) => item.id !== id));
    };
    function Abrir() {
        document.getElementById("ConfiC").style.display = "block"
    }
    function Fechar() {
        document.getElementById("ConfiC").style.display = "none"
        location.reload()
    }
    return (
        <div>
            <section>
                <button onClick={Abrir} className={style.CompanionsBtn}>+</button>
                <div id='ConfiC' className={style.ConfiCentralizada}>
                    <button onClick={Fechar}>✖</button>
                    <h1 style={{ marginTop: "5vh" }}>Criando um Companheiro</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Nome do Companion" onChange={(e) => setName(e.target.value)} value={name} />
                        <input type="text" placeholder="Image do Companion" onChange={(e) => setSpriteC(e.target.value)} value={spriteC} />
                        <input type="text" placeholder="Descrição do Companion" onChange={(e) => setSpriteDesciption(e.target.value)} value={spriteDesciption} />
                        <button className={style.BtnEnviar} onSubmit={handleSubmit} type="submit">
                            {isEditing ? "Editar" : "Enviar"}
                        </button>
                    </form>
                </div>
                {CompanionApi.length > 0 && (
                    <div>
                        <List items={CompanionApi} removeItem={removeItem} />
                    </div>
                )}
            </section>
        </div>
    )
}
export default Companions
