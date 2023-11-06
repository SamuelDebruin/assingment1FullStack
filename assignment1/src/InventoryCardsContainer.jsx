//this imports the function from the other file
import InventoryCards from "./InventoryCards";

//creates function
export default function InventoryCardsContainer({items, addList }){
    return(
        //this will grab all the fields that are listed from the array and will tell the other file to display these fields
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
