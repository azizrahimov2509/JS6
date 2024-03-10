/* 46.Shunday funksiya yasangki, ushbu funksiya 2ta argumentqabul qiladi. Birinchi argument massive, ikkinchi argument ushbu massivni boshidan boshlab nechta elementni tushurib qoldirish. Tushirib qoldirilgandan so’ng funksiya natijani qaytarsin.
tushirMassiv([1, 2, 3], 1) => [2, 3]
tushirMassiv([1, 2, 3], 2) => [3]
tushirMassiv([1, 2, 3], 5) => []
tushirMassiv([1, 2, 3], 0) => [1, 2, 3]
*/


// let array = [1,2,3,4,5];

// function missedArray(arr,missedNumber){
//     let misNumber = arr.splice(0,missedNumber)
//     return arr;
// }

// console.log(missedArray(array,1));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////



/*47 Funksiya argument sifatida ovoz berib qo’llab quvvatlashlar soni va ovoz berib qo’llamaganlar sonini qabul qiladi. Funksiya natijani qaytarsin. 
Namuna:
ovozlar({ upvotes: 13, downvotes: 0 }) => 13
ovozlar({ upvotes: 2, downvotes: 33 }) => -31
ovozlar({ upvotes: 132, downvotes: 132 }) => 0*/


// let votesObj = {
//     upvotes: 40,
//     downvotes: 20
// }

// function amountOfVotes(votes){
//    return votes.upvotes - votes.downvotes
// }

// console.log(amountOfVotes(votesObj));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/*49.Massivni elementlarini o’rnin almashtiradigan funksiya yasang. Reverse metodi siz ham urinib ko’ring.*/

//  function reverse(arr){
//     let newArr = [];
//     for(let i = arr.length-1; i>=0;i--){
//         newArr.push(arr[i]);
//     }
//     return newArr;
//  }

//  let array = [1,2,3,4,5,6];
//  let reversedArray = reverse(array);

//  console.log(reversedArray);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*51.Quyidagi namunalarda kamchilik bor funksiya aslida harvbir massivning elementiga 1 qo’shishi kerak. Funksiya to’g’ri yasang.
Namuna:
oshir1ga([0, 1, 2, 3]) => [1, 2, 3, 4]
oshir1ga([2, 4, 6, 8]) => [3, 5, 7, 9]
oshir1ga([-1, -2, -3, -4]) => [0, -1, -2, -3] */


// let errorNumbers = [1,3,5,7,9];

//  function increaseBy1(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i] + 1);
//     }
//     return newArr;
// }

// let rightNumbers = increaseBy1(errorNumbers);

// console.log(rightNumbers);
//////////////////////////////////////////////////////////////////////////////////////////



/*56.Funksiya massiv qabul qiladi. Ushbu funksiya massivning so’nggi elementini qaytarib bersin.*/


// let array = [1,2,3,"rar","zip","Alisher"];

// function lastElement(arr){
//     return arr[arr.length-1]; 
// }

// console.log("So’nggi elementini: ",lastElement(array));
///////////////////////////////////////////////////////////////////////////////////////////



/*62.Funskiya massiv qabul qiladi, ushbu massivni ichida yoki stringlar yoki numberlar joyshlashgan bo’ladi. funksiya massiv elementlarini bitta string qilib qaytarsin.
Namuna:
arrayToString([1, 2, 3, 4, 5, 6]) => "123456"
arrayToString(["a", "b", "c", "d", "e", "f"]) => "abcdef"
arrayToString([1, 2, 3, "a", "s", "dAAAA"]) => "123asdAAAA"
*/

// let array = [1,4,"helloworld",34,"hi"];

// function arrayToString(arr){
//     return arr.join('')
// }

// console.log(arrayToString(array));
////////////////////////////////////////////////////////////////////////////////////////////////////



/*63.Funksia 2ta sonlardan iborat massiv qabul qilsa, ularni birlashtirib bitta massiv ko’rinishida qaytarib bersin.*/ 

// let firstArray = [45,6,9,12,55,4];
// let secondArray = [1,5,2,0,3,4,5];

// function unite(arr1,arr2){
//     return arr1.concat(arr2);
// }

// console.log(unite(firstArray,secondArray));
///////////////////////////////////////////////////////////////////////////////////////////



/*64.Funskiya 2ta argument qabul qiladi. 1-argument massiv, 2-argument ushbu massivning biron elementi. Funksiya ushbu elementning massiv ichida nechinchi indexda turishini qaytarib bersin*/

// let array = ["Red", "Yellow", "Blue", "Green"];

// function arrElement(arr, index){
//     return arr.indexOf(index);
// }

// console.log("Massivni bu indexi: ",arrElement(array,"Green"));
///////////////////////////////////////////////////////////////////////////////////////////



/*65.Funksiya massive bilan index qabul qilsa, ushbu indexdagi massiv elementini qaytarsin.
!!! Indexni eng kichik qiymatga qarab yaxlitlang. */

// let array = [1,2,3,4,5,6,7,8];

// function arrElement(arr, index) {
//     let roundedIndex = Math.floor(index);
//     return arr[roundedIndex];
// }

// console.log("indexdagi massiv elementi: ",arrElement(array,9/2));
///////////////////////////////////////////////////////////////////////////////////////////



/*66.Quyidagi namunani kuzatgan holda funksiya yasang.
Namuna:
namuna([1, 2, 3, 4, 5]) => 15
namuna([-1, 0, 1]) => 0
namuna([0, 4, 8, 12]) => 24*/


// let array = [3,5,7,2,4];

// function sum(arr){
//     let result = 0;
//     for(i=0;i<arr.length;i++){
//         result = result +  arr[i];
//     }
//     return result;
// }

//  console.log("Yig'indisi: ",sum(array));
///////////////////////////////////////////////////////////////////////////////////////////



/*Promptan ism, telefon raqam, manzil ma'lumotlari olinib console log ka object ko'rinishida chiqaring.*/

// let ism = prompt("Ismingizni kiriting");
// let tel = prompt("Tel raqamingizni kiriting");
// let manzil = prompt("Manzilingizni kiriting");
 

// let user = {
//     name: ism,
//     number: tel,
//     address: manzil
// }


// console.log(user);





