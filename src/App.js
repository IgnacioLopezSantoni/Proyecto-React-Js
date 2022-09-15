import React from "react"; 
import NombreComponents from"./components/NavBar/navBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import  MiComponente from "./components/MiComponente";



const App = () => {
  const dash = "Las mejores ofertas";
  const nombre = "Ignacio"
  const apellido = "Lopez"

  return(
    <>
    < header nombre ={nombre} id="1" apellido ={apellido}/>
    <ItemListContainer greeting={dash}/>
    <MiComponente/>
    <NombreComponents/>
    
    
    
    
    </>
  )
}

export default App
 
  
