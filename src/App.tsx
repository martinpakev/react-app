import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";
import ListGroup from "./components/ListGroup";

function App() {
 const [alertVisible, setAlertVisability] = useState(false);

 let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

const handleSelectItem = (item:string) =>{
  console.log(item);
}


  return (
     <div>
      {alertVisible && <Alert onClose={() => setAlertVisability(false)}>My alert</Alert>}
      <Button color="secondary" onClick={() => setAlertVisability(true)} > Exercise</Button>
      <ListGroup items={items} heading="Citites" onSelectItem={handleSelectItem}/>
     </div>
  ) 
    
}

export default App;



