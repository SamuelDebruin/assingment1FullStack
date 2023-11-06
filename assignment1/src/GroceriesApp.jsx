import { products } from "./products";
import { useState } from "react";

import InventoryCardsContainer from "./InventoryCardsContainer";
import CartListContainer from "./CartListContainer";


export default function GroceriesApp(){

const [AddToCart, setProduct] = useState([])
    function addList({AddToCart}){
        return setProduct((prevProduct) => [...prevProduct,{...AddToCart, id: crypto.randomUUID()
            },
        ]); 

    }



    return(
        <div className= "GroceriesApp-Container">
            <InventoryCardsContainer items = {products} AddToCart = {addList}/>
            <CartListContainer shoppingcart = {AddToCart}/>

      </div>
        
    )
     
    }





