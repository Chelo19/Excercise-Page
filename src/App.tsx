import Message from "./Message";
import Alert from "./Alert";
import { useState } from "react";

const handleSelectItem = (item: string) => {
  console.log(item);
}

function App(){
  const [alertVisible, setAlertVisibility] = useState(true);

  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
    </div>
  )
  
}

export default App;