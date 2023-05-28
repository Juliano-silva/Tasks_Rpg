import React, { useState, useEffect } from 'react'
import style from './style.module.css'
var Moeda = localStorage.getItem("Moeda")
if (Moeda === "NaN"){
    var Num = Moeda = 0
}else{
    var Num = parseInt(Moeda)
}
const List = ({ items, removeItem, editItem }) => {
    return (
        <div>
            {items.map((item) => {
                const { id, NamesAPI, textTeste, image, video, link, NotExt } = item;
                return (
                    <div>
                        <div key={id} className={style.Conteudo}>
                            <details>
                                <summary><h1><span>{NamesAPI}</span> <div className={style.Buttons}>
                                    <button onClick={() => editItem(id)}>🖊️</button>
                                    <button onClick={() => removeItem(id)}>🗑️</button></div></h1></summary>
                                <div className={style.ConteudoMonstrar}>
                                    <h1>{id}.{NamesAPI}</h1>
                                    <p>{textTeste}</p>
                                    <a href={link}>{link}</a>
                                    <p>{NotExt}</p>
                                    <img src={image} />
                                    <iframe id='Ifrm' src={video}></iframe>
                                    <br />
                                </div>
                            </details>
                        </div>
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
    const [link, setLink] = useState("")
    const [date, setDate] = useState("")
    const [image, setImage] = useState("")
    const [video, setVideo] = useState("")
    const [NotExt, setNotExt] = useState("")
    const [textTeste, settextTeste] = useState("")
    const [ApiAdc, setApiAdc] = useState(getLocalStorage())
    const [editId, setEditID] = useState(null)
    const [isEditing, setIdEditing] = useState(false)
    var Data = new Date()
    var Day = Data.getDate()
    var Min = Data.getMinutes()
    var Hour = Data.getHours()
    var Seg = Data.getSeconds()
    var Mes = Data.getMonth() + 1
    useEffect(() => {
        localStorage.setItem("ApiAdc", JSON.stringify(ApiAdc));
    }, [ApiAdc])
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && isEditing, link && isEditing, textTeste && isEditing, image && isEditing, video && isEditing, NotExt && isEditing, date && isEditing) {
            setApiAdc(
                ApiAdc.map((item) => {
                    if (item.id === editId) { return { ...item, NamesAPI: name, link: link, image: image, video: video, NotExt: NotExt, textTeste: textTeste, date: ConteudoData } }
                })
            );
            setName("");
            setLink("")
            setDate("")
            setImage("");
            setVideo("");
            setNotExt("");
            settextTeste("");
            setIdEditing(false);
        } else {
            var ConteudoData = `Day: ${Day} Month: ${Mes} ${Hour}h ${Min}m ${Seg}s`
            let DadosApi = JSON.parse(localStorage.getItem("ApiAdc"))
            var Dados = JSON.stringify((parseInt(DadosApi.length)))
            var IDs = localStorage.setItem("NumDados", Dados)
            const newItem = { id: localStorage.getItem("NumDados"), NamesAPI: name, link: link, image: image, video: video, NotExt: NotExt, textTeste: textTeste, date: ConteudoData };
            setApiAdc([...ApiAdc, newItem]);
            setName("");
            setLink("");
            setDate("")
            setImage("");
            setVideo("");
            setNotExt("");
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
        setName(EditItem.NamesAPI);
        setLink(EditItem.link)
        setDate(EditItem.date)
        setImage(EditItem.image);
        setVideo(EditItem.video);
        setNotExt(EditItem.NotExt);
        settextTeste(EditItem.textTeste);
    };
    function Abrir() {
        document.getElementById("Confi").style.display = "block"

    }
    function Fechar() {
        document.getElementById("Confi").style.display = "none"
    }
    function SelecionarBlocoExtras() {
        var selection = document.getElementById("SelecionarBloco")
        var img = document.getElementById("img")
        var videos = document.getElementById("videos")
        var ExtraNota = document.getElementById("NotExt")
        var link = document.getElementById("link")
        var value = selection.options[selection.selectedIndex].value
        img.style.display = "none"
        videos.style.display = "none"
        ExtraNota.style.display = "none"
        link.style.display = "none"
        if (value === "Normal") {
            img.style.display = "none"
            link.style.display = "none"
            videos.style.display = "none"
            ExtraNota.style.display = "none"
        }
        else if (value === "Image") {
            img.style.display = "block"
        }
        else if (value === "Video") {
            videos.style.display = "block"
        }
        else if (value === "Link") {
            link.style.display = "block"
        }
        else {
            ExtraNota.style.display = "block"
        }
    }
    function Didin2(){
        localStorage.setItem("Moeda",parseInt(Num)+100)
    }
    return (
        <div id='BodyJr'>
            <button onClick={Abrir} className={style.BtnAdd}>Adicionar um projeto</button>
            <div id='Confi' className={style.ConfiCentralizada}>
                <button onClick={Fechar}>✖</button>
                <h1>Criando uma Nota</h1>
                <form onSubmit={handleSubmit}>
                    <input required id='User' type="text" placeholder="Nome da Nota" onChange={(e) => setName(e.target.value)} value={name} />
                    <input required id='User' type="text" placeholder="Texto da Nota" onChange={(e) => settextTeste(e.target.value)} value={textTeste} />
                    <select required id="SelecionarBloco" onChange={SelecionarBlocoExtras}>
                        <option value="Normal">Normal</option>
                        <option value="Image">Image</option>
                        <option value="Link">Link</option>
                        <option value="Video">Video</option>
                        <option value="NotaExtra">Extra Nota</option>
                    </select>
                    <input type="text" id="img" placeholder='Image da Nota' onChange={(e) => setImage(e.target.value)} value={image} />
                    <input type="text" id="videos" placeholder='Video da Nota' onChange={(e) => setVideo(e.target.value)} value={video} />
                    <input type="text" id="link" placeholder='Link da Nota' onChange={(e) => setLink(e.target.value)} value={link} />
                    <textarea id="NotExt" placeholder='Nota extra' onChange={(e) => setNotExt(e.target.value)} value={NotExt} />
                    <button onClick={Didin2} className={style.BtnEnviar} type="submit">
                        {isEditing ? "Editar" : "Enviar"}
                    </button>
                </form>
            </div>
            {ApiAdc.length > 0 && (
                <div>
                    <List items={ApiAdc} removeItem={removeItem} editItem={EditItem} />
                </div>
            )}
        </div>
    )
}
export default Adicionar
