import InventoryCards from "./InventoryCards";


export default function InventoryCardsContainer({items, addList }){
    return(
        <div className="InventoryCards-Container">
            {items.map((i) =>(
                <InventoryCards 
                key = {i.id}
                image={i.image}
                productName={i.productName}
                brand={i.brand}
                quantity={i.quantity}
                price={i.price}
                addList={addList}/>
                
            ))}
        </div>

    )
}
