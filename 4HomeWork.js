// let n = 17;
// for (let i = 2; i <= n; i++){
//     let num = true;
//     for (let k = 2; k < i; k++){
//         if (i % k == 0){
//             num = false;
//         }
//     }
//     if (num == true){
//         console.log(i);
//     } 
// }
//================================================================
// let arr = [1, 2, 10, -5, 7, 25, 100, 98, 15];
// let arr2 = [25, 56, 1, 25, 7, 78, 98];
// let sum = 0;
// for (let i = 0; i < arr.length + arr2.length; i++) {
//     if (i < arr.length) {
//         sum += arr[i];
//     } else {
//         sum += arr2[i - arr.length];
//     }
// }

// console.log(sum);
// let sum1 = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum1 += arr[i];
// }
// for (let i = 0; i < arr2.length; i++) {
//     sum1 += arr2[i];
// }
//  console.log(sum1)

//====2. При помощи цикла for выведите чётные числа от 2 до 10======================
// for(let i = 2; i <= 10; i +=2) {
//     console.log(i)
// }
// console.log('-----------------------------------')

// for(let i = 2; i <= 10; i++) {
//     if(i % 2 == 0) {
//         console.log(i)
//     }
// }

//====3. Is number a prime number==================================================================
// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n > 1 – простое, если при его 
// делении на любое число кроме 1 и n есть остаток.
// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
// Напишите код, который выводит все простые числа из интервала от 2 до n.
// Для n = 10 результат должен быть 2,3,5,7.

// let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// // let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let isPrime = '';
// // let primeNumbers = [];
// let primeNumbers = '';
// for(let i = 1; i < num.length; i++) {
//     if (num[i] == 1) {
//         isPrime = num[i] + " is not prime"
//     }
//     else if (num[i] % 2 === 0 && num[i] != 2) {
//         isPrime = i + " is not prime"
//     }
//     else if (num[i] != 3 && num[i] % 3 === 0) {
//         isPrime = i + " is not prime"
//     }
//     else if (num[i] != 5 && num[i] % 5 === 0) {
//         isPrime = i + " is not prime"
//     }
//     else if (num[i] != 7 && num[i] % 7 === 0) {
//         isPrime = num[i] + " is not prime"
//     }
//     else {
//         isPrime = '        ' + num[i] + " is prime"
//         primeNumbers = primeNumbers + num[i] + ' '
//     }
//     console.log(isPrime)
// }
// console.log("There are: ", primeNumbers)
//====inner loop example for this problem============================
// let n = 10;
// nextPrime:
// for(let i = 2; i <= n; i++) { //go thought all numbers
//     for(let j = 2; j < i; j++) { //check
//         if (i % j == 0) continue nextPrime; // if no, go to next
//     }
//     console.log(i)
// }

//========4. Задача на смекалку=========================================
// Имеется зашифрованное предложение 
// “Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”
// мы знаем, что оно означает “You are the best QA ever”.
// Нам нужно придумать программу дешифратор.

// let text = "You are the best QA ever"
// let newText = ''
// let count = 0
// for(let i = 0; i < text.length; i++) {
//     if (count % 2 == 0) {
//         newText = newText + text[i] + "br"
//     }
//     count += 2
// }
// console.log(newText)

// // decoder
// let text2 = ''
// for(let i = 0; i < newText.length; i += 3) {
//     text2 = text2 + newText[i]
// }
// console.log(text2)

//=====5. Задачка посложнее* 
//  Придумайте свой собственный шифр, а также программу, которая будет шифровать и затем дешифровщик к нему

// let message = 'Work smarter, not harder! Be on time!'
// let keyWord = "Be happy!" //"Today will be a good day!"
// let encriptedMessage = ''

// for (let i = 0; i < message.length; i++) {
//     for (let e = 0; e < keyWord.length; e++) {
//         if (i == e) {
//             encriptedMessage = encriptedMessage + message[i] + keyWord[e]
//             keyWord += keyWord[e] 
//         }
//     }
// } 
// console.log(encriptedMessage)

//====Inner loop work example===============================

// let message2 = 'Work smarter, not harder!Be on time!'
// let keyWord2 = "+++" 
// let encriptedMessage2 = ''
// let countE = 0
// let countI = 0
// for (let i = 0; i < message2.length; i++) {
//     for (let e = 0; e < keyWord2.length; e++) {
        
//             encriptedMessage2 = encriptedMessage2 + message2[i] + keyWord2[e]
//             countE++
        
//     }
//     countI++
// } 
// console.log(countI, countE)
// console.log(encriptedMessage2)

//======Задача с интервью*
// У вас есть массив со скобками, предположим 
// [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] количество элементов и последовательность может быть разной.
// Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).

// let sum1 = 0;
// let sum2 = 0;
// // let str = ['(', ')', '(', ')', ')'];
// let str = ['(', ')', '(', ')', ')', '(', '(', ')'];

// for (let i = 0; i < str.length; i++) {
//     if (str[i] == '(') {
//         sum1 += 1
//     }
//     else if (str[i] == ')') {
//         sum2 += 1
//     }

// }
// console.log('opening = ' + sum1 + ', closing = ' + sum2)

// if (sum1 == sum2) {
//     console.log('equal')
// } else {
//     console.log('not equal')
// }
