
export default function CartList({productName, price}){
return (
<div className="CartListCard-Card">
<img className="img" src={image} alt=""/>
      <h3 className="PName">{productName}</h3>
      <h4 className="price">{price}</h4>
      <button onClick={"sadh"}>Remove</button>
</div>
)
}