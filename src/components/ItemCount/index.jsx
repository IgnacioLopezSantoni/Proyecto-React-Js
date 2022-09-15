import {Text, Button, HStack} from '@mui/material'
import { Button } from '@mui/material'
import {useState} from 'react'

const ItemCount =({initial, stock, onadd})=>{

  const [count,setCount]= useState(initial)

  const increase = ()=> count < stock && setCount(count + 1)
  const decrease = ()=> count > initial && setCount(count - 1)
   

   return(

     <HStack>

        <Button disabled={count === initial} onClick={decrease}>-</Button>
        <Text>{count}</Text>
        <Button disabled={count === stock} onClick={increase}>-</Button>
        <Button> Agregar al carrito </Button>
        




     </HStack>


   )

}
export default ItemCount