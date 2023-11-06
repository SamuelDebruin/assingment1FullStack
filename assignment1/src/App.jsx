import "./App.css";
//imports the grocrie file onto the website  
import GroceriesApp from "./GroceriesApp";

//h2 displays the website title at a certen size
function App() {
  return(
    <>
    
      <h2 className="name">Grocreies App</h2>
      <GroceriesApp/>

    </>
  
  )
}

export default App;
