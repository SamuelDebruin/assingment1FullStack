
export default function Inventory({productName, brand, quantity, image, price, addList}){
    const AddToCart = {productName, price};
    return(
        <div className="Inventory-Card">
            <img className="img" src={image} alt=""/>
            <h2 className="PName">{productName}</h2>
            <h3 className="brand">{brand}</h3>
            <p className="quant">{quantity}</p>
            <h3 className="price">{price}</h3>
            <button onClick={() => addList(AddToCart)} >Add To Cart</button>
        
            
                
                
            
            </div>
        
    );
}
