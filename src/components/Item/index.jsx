import {Image, Button, Text, VStack} from '@mui/material'

const Item = ({product}) =>{

    return (


        <VStack>

             <Text>{product.product}</Text>
             <Image src = {product.Image} w="200px" />
            <Text>${product.price}</Text>
            <Button>Ver Detalle</Button>
        </VStack>
    )




}
export {Item}