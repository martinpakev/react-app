import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
 const [alertVisible, setAlertVisability] = useState(false);

  return (
     <div>
      {alertVisible && <Alert onClose={() => setAlertVisability(false)}>My alert</Alert>}
      <Button color="secondary" onClick={() => setAlertVisability(true)} > Exercise</Button>
     </div>
  ) 
    
}

export default App;

// let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

// const handleSelectItem = (item:string) =>{
//   console.log(item);
// }

// return (
//   <div>
//     <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
//   </div>
