import React from "react"; 
import NavBar from"./components/NavBar/navBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import  MiComponente from "./components/MiComponente";


const App = () => {
  const dash = "Las mejores ofertas";
  const nombre = "Ignacio"
  const apellido = "Lopez"

  return(
    <>
    <navBar nombre ={nombre} id="1" apellido ={apellido}/>
    <ItemListContainer greeting={dash}/>
    <MiComponente/>
    
    
    
    
    </>
  )
}

export default App
 
  
