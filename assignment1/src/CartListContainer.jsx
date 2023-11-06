import CartList from "./CartList";

export default function CartListContainer({shoppingCart}){
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