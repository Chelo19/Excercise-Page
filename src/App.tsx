import Message from "./Message";
import Alert from "./Alert";
import FreeSearch from "./pages/FreeSearch/FreeSearch";
import NavBar from "./components/NavBar/NavBar";
import IndividualExcercise from "./pages/IndividualExcercise/IndividualExcercise";
import { useState } from "react";
import './App.css';

const handleSelectItem = (item: string) => {
  console.log(item);
}

function App(){
  const [alertVisible, setAlertVisibility] = useState(true);

  return (
    <div className="main_app">
      <NavBar/>
      <FreeSearch/>
      {/* <IndividualExcercise/> */}
      {/* {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>} */}
    </div>
  )
  
}

export default App;