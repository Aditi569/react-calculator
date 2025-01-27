import styles from  "./assets/App.module.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import { useState } from "react";


function App() {
  const [calVal , setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
  if(buttonText === 'C'){
    setCalVal("");
  }else if (buttonText === '='){
    try {
      const result = eval(calVal);
      setCalVal(result.toString());
    } catch (error) {
      setCalVal("Error");
    }  
   } else {
    // Concatenate the clicked button text to the current display value
    setCalVal((prevValue) => prevValue + buttonText);
  }
};
  
  return (
    <div className={styles.calculator}>
      <Display displayValue = {calVal}/>
      <Buttons onButtonClick={onButtonClick}/>
      </div>
  );
}

export default App;
