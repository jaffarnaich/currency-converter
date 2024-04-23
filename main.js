import inquirer from "inquirer";
console.log("currency_converter");
const currency = {
    USD: 1, //U.S DOLLAR (base currency)
    EUR: 0.93, // EURO
    PKR: 278, // PAKISTANI RUPEES
    IND: 83, // INDIAN RUPEES
    CAD: 1.37, // CANADIAN DOLLAR
    QAR: 3.64, // QATARI RIYAL
    AED: 3.67, // UAE DIRHAM
    JPY: 154.82 // JAPANESE YEN
};
let user_answer = await inquirer.prompt([{
        name: "from",
        message: "enter from Currency",
        type: "list",
        choices: ["USD", "EUR", "PKR", "IND", "CAD", "QAR", "AED", "JPY"]
    },
    {
        name: "to",
        message: "enter to Currency",
        type: "list",
        choices: ["USD", "EUR", "PKR", "IND", "CAD", "QAR", "AED", "JPY"]
    },
    {
        name: "amount",
        message: "enter your amount",
        type: "number"
    }
]);
let userFromCurrency = user_answer.from;
let usertoCurrency = user_answer.to;
let fromAmount = currency[userFromCurrency]; // exchange rate
let toAmount = currency[usertoCurrency]; // exchange rate
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; // USD base currency
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
