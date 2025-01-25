import handleSingleOperation from "./handleSingleOperation";
import handleOperator from "./handleOperator";
import handleEquals from "./handleEquals";
import handleDelete from "./handleDelete";

const handleClick = (button, display, setDisplay, currentNumber, setCurrentNumber, expression, setExpression,isResultDisplayed, setIsResultDisplayed) => {
  if (button === "C" || button === "CE") {
    setDisplay("");
    setCurrentNumber("");
    setExpression("");
    setIsResultDisplayed(false);
  } else if (button === "⌫") {
    handleDelete(currentNumber, setCurrentNumber, display, setDisplay, expression, setExpression,isResultDisplayed);
  } else if (button === "+/-") {
  setIsResultDisplayed(false);
  console.log(currentNumber)
  if (currentNumber) {
    const toggledNumber = currentNumber.startsWith('−') 
      ? currentNumber.slice(1) 
      : '−' + currentNumber;
    
    setCurrentNumber(toggledNumber);
    setDisplay((prevDisplay) =>
      prevDisplay.slice(0, -currentNumber.length) + toggledNumber
    );
  }

  } else if (["+", "−", "×", "÷"].includes(button)) {
    handleOperator(button, currentNumber, setExpression, setCurrentNumber, setDisplay,display,setIsResultDisplayed);
  } else if (["1/x", "x²", "√", "%"].includes(button)) {
    handleSingleOperation(button, currentNumber, setDisplay, setCurrentNumber, display,setIsResultDisplayed);
  } else if (button === "=") {
    handleEquals(currentNumber, expression, setDisplay, setCurrentNumber, setExpression,setIsResultDisplayed);
  } else {
    if(isResultDisplayed){
      setCurrentNumber(button);
      setDisplay(button);
      setExpression("");
      setIsResultDisplayed(false);

    }else{
      setCurrentNumber(currentNumber + button);
    setDisplay(display + button);
    }
    
  }
};

export default handleClick;
