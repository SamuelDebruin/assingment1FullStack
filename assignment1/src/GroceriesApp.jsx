import { products } from "./products";
import { useState } from "react";

import InventoryCardsContainer from "./InventoryCardsContainer";
import CartListContainer from "./CartListContainer";


export default function GroceriesApp(){

const [AddToCart, setProduct] = useState([])
    function addList({productItem}){
        return setProduct((prevProduct) => [...prevProduct,{...productItem, id: crypto.randomUUID()
            },
        ]); 

    }



    return(
        <div className= "GroceriesApp-Container">
            <InventoryCardsContainer items = {products} addList = {addList}/>
            <CartListContainer shoppingCart = {AddToCart}/>

      </div>
        
    )
     
    }





