import React, { useState, useEffect } from 'react'
import style from './style.module.css'
const List = ({ items }) => {
  return (
    <div id='BodyJr'>
      <h1>Histórico:</h1>
      {items.map((item) => {
        const { id, NamesAPI, textTeste, image, video, link, NotExt, date } = item;
        return (
          <div key={id} className={style.Historico}>
            <details>
              <summary><h3>{id}.{NamesAPI}</h3></summary>
              <h2>{textTeste}</h2>
              <a href={link}>{link}</a>
              <img src={image} alt="" />
              <iframe src={video} frameborder="0"></iframe>
              <p>{NotExt}</p>
              <h4>{date}</h4>
            </details>
          </div>
        )
      })}
    </div>
  )
}
const getLocalStorage = () => {
  let ApiAdc = localStorage.getItem("ApiAdc")
  if (ApiAdc) { return (ApiAdc = JSON.parse(localStorage.getItem("ApiAdc"))) } else { return []; }
}
const BodyCard = () => {
  const [ApiAdc] = useState(getLocalStorage())
  useEffect(() => {
    localStorage.setItem("ApiAdc", JSON.stringify(ApiAdc));
  }, [ApiAdc])
  return (<div>{ApiAdc.length > 0 && (<div><List items={ApiAdc} /></div>)}</div>)
}
export default BodyCard