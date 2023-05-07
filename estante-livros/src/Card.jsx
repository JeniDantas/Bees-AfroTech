import React, { useEffect, useState }  from "react";
import "./Card.css"

function Card() {
    const [dependencia, setDependencia] = useState(false);
    const [classe, setClasse] = useState("");

    useEffect(() =>{
        if (dependencia)
            setClasse("card")
        else
            setClasse("card2")

    }, [dependencia])

    return(
        <div className={classe}>
            Oii
            <br />
            <button onClick={()=>{setDependencia(true)}}>Girar</button>
        </div>
    );
}
export default Card;