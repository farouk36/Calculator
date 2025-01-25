const handleEquals = async (currentNumber, expression, setDisplay, setCurrentNumber, setExpression, setIsResultDisplayed) => {
  if (currentNumber === "" && expression === "") return;
 
  const fullExpression = expression.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-') + currentNumber.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');
 
  try {
    const response = await fetch(`http://localhost:8080/calculate/api?expression=${encodeURIComponent(fullExpression)}`);
    const result = await response.text();
    
    const formattedResult = parseFloat(result) % 1 === 0 ? parseInt(result).toString() : result;
    
    setDisplay(formattedResult.replace('-', '−'));
    setCurrentNumber(formattedResult.replace('-', '−'));
    setExpression("");
    setIsResultDisplayed(true);
  } catch (error) {
    console.error("Evaluation Error:", error);
    setDisplay("Error");
    setIsResultDisplayed(true);
  }
 };
 
 export default handleEquals;