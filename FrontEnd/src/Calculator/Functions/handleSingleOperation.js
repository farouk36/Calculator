const handleSingleOperation = async (operation, currentNumber, setDisplay, setCurrentNumber, display, setIsResultDisplayed) => {
  
  const number = parseFloat(currentNumber.replace(/−/g, "-"));
  console.log(number)
  if (isNaN(number)||display.startsWith("Error")) return;
  try {
    const response = await fetch(`http://localhost:8080/calculate/single-operation?operation=${encodeURIComponent(operation)}&number=${number}`);
    const result = await response.text();

    if (result.startsWith("Error")) {
      setDisplay(result);
      setIsResultDisplayed(true);
      return;
    }


    const formattedResult = parseFloat(result) % 1 === 0 ? parseInt(result).toString() : result;

    setCurrentNumber(formattedResult);
    const updatedDisplay = display.slice(0, -currentNumber.length) + `${formattedResult}`;
    setDisplay(updatedDisplay);
    setIsResultDisplayed(true);
  } catch (error) {
    setIsResultDisplayed(true);
    console.error("Error:", error);
    setDisplay("Error");
  }
};

export default handleSingleOperation;