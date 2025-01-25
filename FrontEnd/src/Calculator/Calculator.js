import React, { useState, useEffect } from "react";
import "./style.css";
import handleClick from "./Functions/handleClick";

const buttons = [
  '%', 'CE', 'C', '⌫',
  '1/x', 'x²', '√', '÷',
  '7', '8', '9', '×',
  '4', '5', '6', '−',
  '1', '2', '3', '+',
  '+/-', '0', '.', '='
];

const keyMap = {
  'Escape': 'CE',
  'Backspace': '⌫',
  '/': '÷',
  '*': '×',
  '-': '−',
  '+': '+',
  'Enter': '=',
  '.': '.',
  '0': '0',
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9',
  'p': '%',
  'r': '√',
  's': 'x²',
  'i': '1/x',
  'n': '+/-'
};

export default function Calculator() {
  const [display, setDisplay] = useState("");
  const [currentNumber, setCurrentNumber] = useState("");
  const [expression, setExpression] = useState("");
  const [isResultDisplayed, setIsResultDisplayed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;
      const button = keyMap[key];
      if (button) {
        handleClick(button, display, setDisplay, currentNumber, setCurrentNumber, expression, setExpression, isResultDisplayed, setIsResultDisplayed);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [display, currentNumber, expression, isResultDisplayed]);

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        {buttons.map((button) => (
          <button
            key={button}
            onClick={() =>
              handleClick(button, display, setDisplay, currentNumber, setCurrentNumber, expression, setExpression, isResultDisplayed, setIsResultDisplayed)
            }
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}