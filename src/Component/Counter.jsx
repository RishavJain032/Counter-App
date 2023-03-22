import { useState } from "react"
import image1 from '../Component/Add logo.jpg';
import image2 from '../Component/Subtract logo.png'
import hover from '../Component/hover.css'


function Counter(){
    var styleing = {
        width : "350px",
        height : "250px",
        margin : "100px auto",
        boxShadow : "inset 0 0 20px black",
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        borderRadius : "20px"

    }
    let [state,setState] = useState(0)

    const Insc =() =>{
        setState(state + 1)

    }
    const Desc = () =>{
        setState(state - 1)
    }
    var buttonsty  = {
        width : "80px",
        height : "80px",
        // borderRadius : "50%"
        border : "none"
    }
    return(
        <div style = {styleing}>
            <button onClick={Insc} style = {buttonsty}><img src = {image1}width = "80px" height="80px"/></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <h1>{state}</h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={Desc} style = {buttonsty}><img src = {image2} width = "80px" height="80px"/></button>
        </div>
    )

}


export default Counter;