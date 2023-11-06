//this makes the function called cartlist
export default function CartList({productName, price}){

    return (
    //this will show the product name and the price in the shopping cart
<div className="CartListCard-Card">
      <h3 className="PName">{productName}</h3>
      <h4 className="price">{price}</h4>
      <button onClick={"sadh"}>Remove</button>
</div>
)
}