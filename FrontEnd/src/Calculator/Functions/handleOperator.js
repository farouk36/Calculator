const handleOperator = (operator, currentNumber, setExpression, setCurrentNumber, setDisplay,display, setIsResultDisplayed) => {
  console.log(currentNumber)
  if (currentNumber === ""||display.startsWith("Error")) return;

  setExpression((prev) => prev + currentNumber + operator);
  setCurrentNumber("");
  setDisplay((prevDisplay) => prevDisplay + `${operator}`);
  setIsResultDisplayed(false);
};

export default handleOperator;
