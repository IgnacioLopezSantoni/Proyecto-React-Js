import {heading, button, text} from '@mui/material'
import {ItemList} from '../Itemlist'
import {products } from '../../assets/productos'
import {customFetch} from '../../utils/customFetch'
import {useState, useEffect} from 'react'

const ItemListContainer = ({greeting})=> {

 const[ListProducts,setListProducts] = useState([])

 useEffect (()=>{
    customFetch(products)
      .then (res => setListProducts(res))
 }, [])

 //console.log(listProducts)


 return (

   <>
    <Heading>{greeting}</Heading>
    <ItemList ListProducts= {ListProducts} />
   
   </>

 

 )

export {ItemListContainer}





}