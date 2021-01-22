import React from "react"
import './estilo.css'
function Item(props){
    return(
        <p className = "title" >{props.nome}</p>
    )
}
export default Item