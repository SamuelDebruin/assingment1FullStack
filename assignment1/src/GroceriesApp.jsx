//imports the arry from products into the groceries app
import { products } from "./products";
import { useState } from "react";
//imports the functions from the files that are in the same folder
import InventoryCardsContainer from "./InventoryCardsContainer";
import CartListContainer from "./CartListContainer";

//creats the function called groceriesApp
export default function GroceriesApp(){

const [AddToCart, setProduct] = useState([])
//this will grab an item from the array in product.js and give it a unique id
    function addList({productItem}){
        return setProduct((prevProduct) => [...prevProduct,{...productItem, id: crypto.randomUUID()
            },
        ]); 

    }


    //these will show what the functions are doing on the website from the other files
    return(
        <div className= "GroceriesApp-Container">
            <InventoryCardsContainer items = {products} addList = {addList}/>
            <CartListContainer shoppingCart = {AddToCart}/>

      </div>
        
    )
     
    }





