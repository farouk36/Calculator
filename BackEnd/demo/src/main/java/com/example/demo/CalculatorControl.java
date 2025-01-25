package com.example.demo;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value="calculate")
public class CalculatorControl {

    private final CalculatorService cs;

    public CalculatorControl(CalculatorService cs) {
        this.cs = cs;
    }

    @GetMapping("/api")
    public String calculate(@RequestParam String expression) {
        try {
            double result = cs.evaluateExpression(expression);

            return String.valueOf(result);
        } catch (Exception e) {
           if(e.getMessage().equals("Division by zero!")) return "Error: " + e.getMessage();
           else return "Error";
        }
    }
    @GetMapping("/single-operation")

     public String singleOperation(@RequestParam String operation, @RequestParam double number) {
        try {
             double result = cs.evaluateSingleOperation(operation, number);
             return String.valueOf(result);
        } catch (Exception e) {
             return "Error: " + e.getMessage();
         }
     }
}
