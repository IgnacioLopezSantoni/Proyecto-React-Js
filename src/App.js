import React from "react"; 
import Header from "./components/navBar.js/navBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {

  return (
    <>
      <Header/>
      <ItemListContainer greeting={'Bienvenido'} />
    </>
  )
}    

export default App
