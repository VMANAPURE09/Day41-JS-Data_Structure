// //Que1:Storing 3 Digit Number in Array & finding smallest & largest.RG----

// function GetThreeDigitRandomNumber() {
//     return Math.floor(Math.random() * 900 + 100);
//   }
// //Array of 3 Digit Number
// let arrayOf3DigitRandomNumber = new Array();
// //Storing array elements
// for (let i = 0; i < 10; i++){
//     arrayOf3DigitRandomNumber.push(GetThreeDigitRandomNumber());
// }
// console.log("Ten 3 digits Random numbers are: " + arrayOf3DigitRandomNumber.toString());

// FindLargestAndSmallest(arrayOf3DigitRandomNumber);
// //Functiion for getting first & second largest smallest
// function FindLargestAndSmallest(arrayOfElements){
//     let firstLargest = 0,
//         secondlargest = 0;
//     let firstSmallest = 1000,
//         secondSmallest = 1000;
//     for (let i = 0; i < arrayOfElements.length; i++) {
//         if (arrayOfElements[i] > firstLargest) {
//         secondlargest = firstLargest;
//         firstLargest = arrayOfElements[i];
//         } else if (
//         arrayOfElements[i] > secondlargest &&
//         arrayOfElements[i] != firstLargest
//         )
//         secondlargest = arrayOfElements[i];
//     }
//     for (let i = 0; i < arrayOfElements.length; i++) {
//         if (arrayOfElements[i] < firstSmallest) {
//         secondSmallest = firstSmallest;
//         firstSmallest = arrayOfElements[i];
//         } else if (
//         arrayOfElements[i] < secondSmallest &&
//         arrayOfElements[i] != firstSmallest
//         )
//         secondSmallest = arrayOfElements[i];
//     }
// console.log("First largest number is: " + firstLargest);
// console.log("First smallest number is: " + firstSmallest);
// console.log("Second smallest number is: " + secondSmallest);
// console.log("Second largest number is: " + secondlargest);
// };

// console.log("\nUsing Array Sort Method");
// arrayOf3DigitRandomNumber.sort();
// console.log("Second Largest Number is : "+arrayOf3DigitRandomNumber[1]);
// console.log("Second Smallest Number is : "+arrayOf3DigitRandomNumber[8]);
/*-------------------------------------------------*/
// //Que3-Calculating Prime Factors
// function PrimeFactors(number) {
//     let array = new Array();
//     for (let i = 2; i <= number / 2; i++) {
//       if (number % i == 0) {
//         let count = 0;
//         for (let j = 2; j <= Math.sqrt(i); j++) {
//           if (i % j == 0) count++;
//         }
//         if (count == 0 && i > 1) array.push(i);
//       }
//     }
//     return array;
//   }
//   let number = Math.floor(Math.random() * 1000);
//   console.log("Prime Factors of " + number + " are : ");
//   console.log(PrimeFactors(number));


//Que4-three elements whose sum is equal to zero
arr = [0, -1, 2, -3, 1];
      
// Prints all triplets in arr[] with 0 sum    
    function findTriplets(arr) {
        let found = false;
        for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === 0)
                {
                    console.log("Three Numbers Whose Sum equal to Zero");
                    console.log(arr[i]);
                    console.log(arr[j]);
                    console.log(arr[k]);
                    console.log(".....................");
                    found = true;
                     
                }
            }
        }
        // If no triplet with 0 sum found in array
        if(found === false) {
            document.write(" not exist ");
        }
    }
   }
    findTriplets(arr);
