package com.example.demo;

import net.objecthunter.exp4j.Expression;
import net.objecthunter.exp4j.ExpressionBuilder;
import org.springframework.stereotype.Service;

@Service
public class CalculatorService {

    public double evaluateExpression(String fullExpression) {
        
        Expression expression = new ExpressionBuilder(fullExpression).build();
        return expression.evaluate();
    }
    public double evaluateSingleOperation(String operation, double number) {
        double res=number;
        switch (operation) {
            case "1/x":
                res = 1/number;
                break;
            case "x²":
            res = number*number;
                break;
            case "√":
            if(number<0) throw new IllegalArgumentException("Unsupported operation");
               res=Math.sqrt(number);
                break;
            case "%":
                res = number/100.0;
                break;
            default:
                throw new IllegalArgumentException("Unsupported operation");
        }
        return res;
    }
}
