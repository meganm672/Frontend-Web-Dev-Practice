console.log("hello world")

//Jacket or No Jacket

//declare a varible to hold current temp
//assign value of 60
// let currentTemp = 90;
// //declare varible isRaining
// //assign boolean value
// let isRaining = true;
// //use conditional statement to check values of varibles

// //write if statment if temp is less than or = to 40
// //print "It's <temp> degrees outside! Wear a heavy jacket."
// if(currentTemp <= 40){
//     console.log(`It's ${currentTemp} degrees outside! Wear a heavy jacket.`);
// }
// //add else if statement if temp is less than or = 60
// //print "It's <temp> degrees outside! Wear a jacket"
// else if(currentTemp <= 60){
//     console.log(`It's ${currentTemp} degrees outside! Wear a jacket.`);
// }
// //add else if statement if temp is less than 70
// //print "It's <temp> degrees outside! Wear a light jacket."
// else if (currentTemp < 70){
//     console.log(`It's ${currentTemp} degrees outside! Wear a light jacket.`);
// }
// //else
// //print "It's hot out today! No jacket needed."
// else{
//     console.log("It's hot out today! No jacket needed.");
// }

//add if statement for isRaining is true
//print “It’s raining, too, so you should bring an umbrella!”
// if (isRaining === true){
//     console.log("It’s raining, too, so you should bring an umbrella!");
// }
// //else false
// //“No rain today, you can leave the umbrella at home!”
// else{
//     console.log("No rain today, you can leave the umbrella at home!")
// }

//ternary operator for isRaining

// isRaining === true ? console.log("It’s raining, too, so you should bring an umbrella!") : console.log("No rain today, you can leave the umbrella at home!");

function jacket(currentTemp,isRaining){
    isRaining === true ? console.log("It’s raining, too, so you should bring an umbrella!") : console.log("No rain today, you can leave the umbrella at home!");
    if(currentTemp <= 40){
        return (`It's ${currentTemp} degrees outside! Wear a heavy jacket.`);
    } else if(currentTemp <= 60){
        return (`It's ${currentTemp} degrees outside! Wear a jacket.`);
    } else if (currentTemp < 70){
        return (`It's ${currentTemp} degrees outside! Wear a light jacket.`);
    } else{
        return ("It's hot out today! No jacket needed.");
    }
}

const jacketOrNoJacket = console.log(jacket(60,true));


//The Calculator

//declare var called userName
//assign empty string
let userName = "";
//if userName has truthy value
//print “Hello <user>!” to the console
//if falsy value
//print “Hello, guest!”
userName ? console.log(`Hello ${userName}!`) : console.log('Hello, guest!');
//declare two vars that hold numbers
let num1 = 27;
let num2 = 55;
//declare var to hold math operation as a string
let math = "divide";
//Use conditional statements to check which operation to use:

// “add” should add the two numbers together, 
//and print “Sum of <num1> and <num2> is <result>.”
if(math === "add"){
  let result = num1 + num2;
    console.log(`Sum of ${num1} and ${num2} is ${result}.`)
}
// “subtract” should subtract num2 from num1, 
//and print “Difference of <num1> and <num2> is <result>.”
else if (math === "subtract"){
    let result = num1 - num2;
    console.log(`Difference of ${num1} and ${num2} is ${result}.`);
}
// “multiply” should multiply the two numbers together, 
//and print “Product of <num1> and <num2> is <result>.”
else if (math === "multiply"){
    let result = num1 * num2;
    console.log(`Product of ${num1} and ${num2} is ${result}.`)
}
// “divide” should divide num1 by num2, 
//and print “Division of <num1> and <num2> is <result>.”
else if (math === "divide"){
    let result = num1 / num2;
    console.log(`Division of ${num1} and ${num2} is ${result}.`)
}
// “modulus” should perform the modulo operation on num1 and num2, 
//and print “Modulus of <num1> and <num2> is <result>.”
else if (math === "modulus"){
    let result = num1 % num2;
    console.log(`Modulus of ${num1} and ${num2} is ${result}.`)
}
// If the operation is anything other than the ones listed above, 
//print “<operation> is an invalid operation.”
else{
    console.log(`${math} is an invalid operation`);
}