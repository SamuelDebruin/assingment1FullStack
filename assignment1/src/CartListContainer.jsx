//imports function from other file
import CartList from "./CartList";
//creats function 
export default function CartListContainer({shoppingCart}){
    //this will tell it to grab only the product name and price and put it into a new array
    return(
        <div className="CartList-Container">
            
            {shoppingCart.map((i) => (
                    <CartList
                productName={i.productName}
                price={i.price}
                />
                
            ))}
            
        </div>
    )
}