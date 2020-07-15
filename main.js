// var num = -10.5;
// console.log(Math.abs(num));

// console.log(Math.round(num));

// console.log("Hello : " + Math.ceil(num));

// let radius = 4.5;
// console.log(Math.floor(radius));



// let randomNumber = (Math.random() * 100) + 1;
// console.log(Math.round(randomNumber));



// let age = 35;
// const birthYear = 1994;

// if(age >= 0 && age <= 12){
//     console.log("Age range : Infant");
    
// }
// else if (age >= 13 && age <= 19){
//     console.log("Age range :Teen Ager");

// }

// else if(age > 19 && age <= 30){
//     console.log('Age range : Young Man');
// }

// else if (age >= 31 && age <= 50 ){
//     console.log("Age range : Middle aged");

// }

// else{
//     console.log("Age range :Senior Citizen");
// }



// const isJob = true;
// let savingAmount = 5000;
// const hasHome = false;

// if(isJob === true && savingAmount > 200000){
//     console.log("Marry");

// }

// else if(isJob === true && hasHome === true){
//     console.log("Marry now");
// }

// else{
//     console.log("Amr moto wait koro");
//}



// const date = new Date('1994-12-16');
// console.log(date);




// let friends = [ "tarek", "shadin", "sakib", "tamim"];
// console.log(friends);

// console.log(friends.indexOf('tamim'));

// console.log(friends[2]);


// friends[3] = "rakib";
// console.log(friends);

// friends.push("Habib");

// console.log(friends.length);



// friends.unshift("Tamim");
// console.log("Old friend list :" + friends);



// let age = 90;
// while(age < 100){
//     console.log(age);

//     age++;
// }


// let numbers = [45, 48, 52, 59, 54, 49, 39];
// for(var i = 0; i< numbers.length; i++){
//     console.log("Assignment numbers : " + numbers[i]);

// }



// let score = 45;

// switch(score){
//     case 1000: 
//         console.log("I am one thousand");
//         break;
//     case 2000:
//         console.log("I am two thousand");
//         break;
//     case 3000:
//     case 5000: 
//         console.log("I am three thousand or five thousand");
//         break;
//     default:{
//         console.log("Unknown figure");

//     }

// }

/*
function add(num1, num2){
    return num1 + num2;
}

console.log(add(15, 14));

*/



/* JS object */

// let cinema = {
//     sadman: "terzon", 
//     asif: "tere nal",
//     wazed: "shivam"

// };

// console.log(cinema);
// console.log(cinema.asif);

// console.log(cinema.wazed);


// cinema.shakib = "Juda";
// console.log(cinema);



// var treeHeightInInch = [ 300, 288, 144, 84];
// for(let i = 0; i < treeHeightInInch.length; i++){
//     treeHeightInFeet = treeHeightInInch[i] / 12;
//     console.log(treeHeightInFeet);
    
// }

/*inch to feet converter */

// function inchToFeetConverter(inch){
//     return inch/12;
// }

// console.log("Result in feet : " + inchToFeetConverter(12));

 /* Leap year checker */

// let year = 1900;
// if( year % 400 === 0){
//     console.log("Leap Year");
//     }

// else if(year % 4 === 0 && year % 100 !== 0){
//     console.log("Leap Year");
//     }

// else{
//     console.log("Not a leap Year")
// }



// function leapYearChecker(year){
//     if(year % 400 === 0 || (year % 4 === 0 && year % 100 !==0)){
//         console.log("Leap Year")
//     }
//     else{
//         console.log("Not a leap year");
//     }
// }

// leapYearChecker(2020);





// function factorialCalculator(number){
//     var result = 1;
//      for(let i = 1; i<= number; i++){
//         result = result * i;
//     }  
//     return result; 
// }


// console.log(factorialCalculator(5));




// function factorialCalculatorVersion2(number){
//     let finalResult = 1;


//     let i = 1;
//     while(i<= number){
//         finalResult *= i;
//         i++;
//     }
//     return finalResult;
// }

// console.log(factorialCalculatorVersion2(6));



/**recursive factorial */

// function recursiveFactorial(number){

//     if(number === 0){
//         return 1;
//     }

//     else{
//         return recursiveFactorial(number-1) * number;
//     }

// }
// console.log(recursiveFactorial(10));



/**loop fibo */
// var fibo = [ 0, 1];

// for( let i = 2; i< 10; i++){
//     fibo[i] = fibo[i-1] + fibo[i-2];
//     console.log(fibo[i]);
    

// }
// console.log(fibo);


function fibonacci(n){
    if (n === 0){
        return [0];

    }

    else if(n ===1){
        return [0, 1];
    }

    else{
        var fibo = fibonacci(n - 1);
        var nextElement = fibo[n-1] + fibo[n - 2];
        

        fibo.push(nextElement);
        return fibo;
    }
}

console.log(fibonacci(4));









/** Swap  */

// var a = 5;
// var b = 7;

// console.log("Before swap: a = ", a, " b =", b);
// var temp = a;
// a = b;
// b = temp;
// console.log("After swap: a = ", a, " b =", b);



/** Swap- 2 way */
// var x = 5;
// var y = 7;
// x = x + y;
// y = x - y;
// x = x - y;

// console.log("After: x = ", x, " y =", y);



/*Java Script Swap */

// var p = 5;
// var q = 7;
// [p, q] = [q, p];
// console.log(p,q);


/** generating random number
   for(let i = 0; i <= 40; i++){
    var randomNumber = Math.ceil(Math.random() * 6) ;
    console.log(randomNumber);
}
 */



/** Finding MAX number with JS */

// let a = 10;
// let b = 20;
// let c = 15;

// let max = Math.max(a, b, c);
// console.log(max);



/**Finding largest Number in the array */

// let marks = [ 25, 32, 44, 40, 32, 48, 34, 50];

// let max = marks[0];

// for(let i = 0; i <marks.length; i++){
//     if(marks[i] > max){
//         max = marks[i];
//     }
// }

// console.log(max);


/** Sum of all element in an array */

// let ages = [ 15, 5, 10, 20 , 40 , 60 ];
// let sum = 0;
// for( let i = 0; i < ages.length; i++){
//     sum = sum + ages[i];
// }
// console.log(sum);



/** Some of an array with Using function */

function findSumOfWeight(weight){
    sum = 0;
    for( let i = 0; i < weight.length; i++){
        sum += weight[i];
    }

    return sum;
}

let randomWeight = [85, 73, 54, 65, 71, 55];
console.log(findSumOfWeight(randomWeight));

// console.log(findSumOfWeight([20, 30, 70, 10]));




function generateSetOfTheseNumber(){

    let randomNumbersSet = [];
    for(let i = 0; i< randomNumbers.length ; i++){

        if(randomNumbersSet.indexOf(randomNumbers[i]) === -1){ 
            randomNumbersSet.push(randomNumbers[i]);
        }
    }
    return randomNumbersSet;
}
let randomNumbers = [25, 25, 28, 45, 45, 25, 80, 80];
console.log(generateSetOfTheseNumber(randomNumbers));





/**count word in a string */

// let speech = "Alhamdulillah I am doing  doing   great with my life. Hopefully you're doing great as well.";

// let countWord = 1;
// for(let i = 0; i <speech.length; i++){
//     if(speech[i] === " " && speech[i+1] !==" "){
//         countWord++;
//     }
// }
// console.log(countWord);



/** Reverse a string */

let statement = "I am Aref";
let reverseStatement ="";
for(let i = 0; i < statement.length; i++){
    reverseStatement = statement[i] + reverseStatement;
}
console.log(reverseStatement);







