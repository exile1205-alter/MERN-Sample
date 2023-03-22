import { ArgumentParser } from "argparse";
import { Calculator } from "./calculator";
import { Operation } from "./operation";

const parser = new ArgumentParser({
    description: "A simple command-line calculator"
});

parser.add_argument("x", {type:Number, help: "The first number"});
parser.add_argument("y", {type:Number, help: "The second number"});
parser.add_argument("--operation", {
    choices: ["add", "substract", "multiply", "divide"],
    required: true,
    help: "The operation to perform"
});

const args = parser.parse_args() as Operation;

if(isNaN(args.x) || isNaN(args.y)){
    console.error("Please provide two invalid numbers.");
}

const calculator = new Calculator(args.x, args.y);

switch(args.operation){
    case "add":
        console.log(calculator.add());
        break;
    case "substract":
        console.log(calculator.substract());
        break;
    case "multiply":
        console.log(calculator.multiply());
        break;
    case "divide":
        console.log(calculator.divide());
        break;
    default:
        console.log("Please specify a valid operation.");
        break;
}
