import React from 'react'
import logo from '../../assets/logo.jpg'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import "./Header.css"
const Header = () => {
    return (
        <header style={style.container}>
        <img  style={style.imagen} src={logo} alt= "logo" />
        <h1> Uco Sports</h1>
        <nav>
            <a style={style.links} href=''> categoria 1</a>
            <a style={style.links} href=''> categoria 2</a>
            <a style={style.links} href=''> categoria 3</a>

        </nav>
        <LocalGroceryStoreIcon />

        </header>
        
    )

}

const style = {
container:{
    display: 'flex',
    justifyContent: 'space-between',
    alingnItems: 'center'
},
imagen:{
    width : '10 %',
},

links:{
    padding:'10 %',

}



}
export default Header