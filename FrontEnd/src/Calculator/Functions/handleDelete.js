
const handleDelete = (currentNumber, setCurrentNumber, display, setDisplay, expression, setExpression,isResultDisplayed) => {
  console.log(isResultDisplayed)
  console.log(currentNumber)
    if(isResultDisplayed);
    else if (currentNumber !== "") {
      const updatedCurrentNumber = currentNumber.slice(0, -1);
      setCurrentNumber(updatedCurrentNumber);
      setDisplay((prevDisplay) => prevDisplay.slice(0, -1));
    } else if (display !== "") {
      const parts = display.split(/([+÷−×/])/);
      if (parts.length > 0) {
        let lastElement = parts.pop();
  
        while (parts.length > 0 && ["+", "−", "×", "÷", ""].includes(lastElement)) {
          lastElement = parts.pop();
        }
  
        setCurrentNumber(lastElement || "");
        const updatedExpression = parts.join("");
        setExpression(updatedExpression);
        setDisplay(updatedExpression + (lastElement || ""));
      }
    }
  };
  
  export default handleDelete;
  