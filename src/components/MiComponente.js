import React, {useState} from 'react'

const MiComponente = () => {
    
    const [contador , setContador] = useState (0);
 
    const sumar =()=> {
        setContador(contador + 1);

    }
    const restar =()=> {
        setContador (contador - 1);
    }


    return (
        <>
        <div>Remera Adidas</div>
        <h1>{contador}</h1>
        <button onClick={sumar}>sumar </button>
        <button onClick={restar}>restar </button>
        </>
    )
    
}

export default MiComponente