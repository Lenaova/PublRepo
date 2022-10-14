// let cupOfCoffeeBlack = "black coffee";
// let cupOfCoffeeWhite = "latte";
// let cupOfCoffeeHot = "hot chocolate";

// let cupSizeSmall = "small";
// let cupSizeMedium = "medium";
// let cupSizeLarge = "large";

// let cupSizeSmallPrice = 3;
// let cupSizeMediumPrice = 4;
// let cupSizeLargePrice = 5;

// let jezve = "golden jezve" 
// let grainedCoffeeBeans = "grained Arabica coffee beans"
// let water = "distiled water"
// let sugar = "cane sugar"
// let cardamom = "Guatemala cardamom"
// let sinnamon = "Indian sinnamon"
// let milk = "milk cream"
// let chocolate = "black chocolate"

// cupOfCoffee = cupOfCoffeeHot;
// size = cupSizeLarge;
// price = cupSizeLargePrice;
// addition = chocolate;

// let task = `Make a cup of ${size} ${cupOfCoffee}`
// let step0 = `Your drink will cost $ ${price}`
// let step1 = `1. Take a ${jezve}` 
// let step2 = `2. Fill ten gramms of ${grainedCoffeeBeans}`
// let step3 = `3. Pour one cup of ${water}`
// let step4 = `4. Fill one spoon of ${sugar}`
// let step5 = `5. Fill pinch of a ${cardamom}`
// let step6 = `6. Fill pinch of a ${addition}`
// let step7 = "7. Start heating on a stove"
// let step8 = `8. Pour an aromatic ${cupOfCoffee} in the cup`
// let result = `Enjoy a cup of ${cupOfCoffee}!`

// console.log(task, "<br>", step0, "<br>" + "<br>", step1, "<br>", step2, "<br>", step3, "<br>", step4, "<br>", step5, "<br>", step6,  "<br>", step7, "<br>", step8, "<br>" + "<br>", result)

//===============================2.2==================
// let cupOfCoffeeBlack = "black coffee";
// let cupOfCoffeeWhite = "latte";
// let cupOfCoffeeHot = "hot chocolate";

// let jezve = "golden jezve" 
// let beans = "grained Arabica coffee beans"
// let water = "distiled water"
// let sugar = "cane sugar"
// let cardamom = "Guatemala cardamom"
// let sinnamon = "Indian sinnamon"
// let milk = "milk cream"
// let chocolate = "black chocolate"
// let coffee
// let addition
// let price = 5

// addition = cardamom;

// if (addition == milk) {
//   coffee = cupOfCoffeeWhite
// }
// else if (addition == chocolate) {
//   coffee = cupOfCoffeeHot
// }
// else if (addition == cardamom) {
//   coffee = cupOfCoffeeBlack
// }

// let task = ` Make a cup of ${coffee}`
// let step1 = `1. Take a ${jezve}` 
// let step2 = `2. Fill ten gramms of ${beans}`
// let step3 = `3. Pour one cup of ${water}`
// let step4 = `4. Fill one spoon of ${sugar}`
// let step5 = `5. Fill pinch of a ${sinnamon}`
// let step6 = `6. Fill pinch of a ${addition}`
// let step7 = "7. Start heating on a stove"
// let step8 = `8. Pour an aromatic ${coffee} in the cup`
// let result = `Enjoy a cup of ${coffee}!`

// console.log(task, "\n" + "\n", step1, "\n", step2, "\n", step3, "\n", step4, "<br>\n", step5, "\n", 
//             step6,  "\n", step7, "\n", step8, "\n" + "\n", result, "\n")

// if (addition == milk){
//   console.log("\n", "Your coffee price is: ", '$', + price * 1.25)
// }
// else {
//   console.log("\n", "Your coffee price is: ", '$', + price)
// }  

// if (addition != milk) {
//   console.log("\n", "Sorry, we don't have this option now!")
// } 
//===============================2.3==================
// let coffee, size, price, ind = 3;
// coffee = "irish";
// size = "large";

// if (coffee === "black") {
//   ind = 2;
// }
// else if (coffee === "latte") {
//   coffee = 3;
// }
// if (coffee === "small") {
//   price = ind * 2;
//   document.write(`Your order ${coffee} coffee ${size}. Total price is: $${price}`);
// }
// else if (coffee === "medium") {
//   price = ind * 3;
//   document.write(`Your order ${coffee} coffee ${size}. Total price is: $${price}`);
// } else {
//   price = ind * 10;
//   document.write(`Your order ${coffee} coffee ${size}. Total price is: $${price}`);
// }

//==================================2.4================================
// let coffee;
// let cupOfCoffeeBlack = "black coffee";
// let cupOfCoffeeWhite = "latte";
// let cupOfCoffeeHot = "hot chocolate";

// let cupSize
// let smallCup = "small cup";
// let mediumCup = "medium cup";
// let largeCup = "large cup";

// let jezve = "golden jezve" 
// let beans = "grained Arabica coffee beans"
// let water = "distiled water"
// let sugar = "cane sugar"

// let cardamom = "Guatemala cardamom"
// let sinnamon = "Indian sinnamon"
// let milk = "milk cream"
// let chocolate = "black chocolate"

// let addition
// let price = 5
// //make a choice
// coffee = cupOfCoffeeHot;
// cupSize = largeCup;
// addition = cardamom;

// if (coffee == cupOfCoffeeBlack) {
//   addition = chocolate
// }
// else {
//   addition = cardamom
// }

// //show cup size
// console.log("Welcome to my home cafe!");
// console.log("We have different cup sizes. Please choose one.\n");

// let cupSizes = [smallCup, mediumCup, largeCup]
// for (let i in cupSizes) {
//     if (cupSizes[i] == smallCup) {
//         console.log(cupSizes[i] + '- ' + price + '$')
//     }
//     else if (cupSizes[i] == mediumCup) {
//         price *= 1.5
//         console.log(cupSizes[i] + '- ' + price + '$')
//     } else if (cupSizes[i] == largeCup) {
//         price *= 2
//         console.log(cupSizes[i] + '- ' + price + '$')
//     } 
//     if (i == cupSizes.length - 1) {
//         console.log('\n')
//     }   
// }

// //show coffee types
// let coffeeBlackRecipe = "CoffeeBlack:\n 10 gramms of coffee beans \n 1 cup of water \n 1 spoon of sugar \n"
// let coffeeWhiteRecipe = "CoffeeWhite:\n 10 gramms of coffee beans \n 1 cup of water \n 1 spoon of sugar \n milk \n"
// let coffeeHotRecipe = "CoffeeHot:\n 10 gramms of coffee beans \n 1 cup of water \n 1 spoon of sugar \n hot chocolate"

// console.log('I have following coffee types \n')
// let menu = [coffeeBlackRecipe, coffeeWhiteRecipe, coffeeHotRecipe]
// for (let i = 0; i < menu.length; i++) {
//     console.log(menu[i])
// }

// let task = `Make a ${cupSize} of ${coffee}`
// let step1 = `1. Take a ${jezve}` 
// let step2 = `2. Fill ten gramms of ${beans}`
// let step3 = `3. Pour one cup of ${water}`
// let step4 = `4. Fill one spoon of ${sugar}`
// let step5 = `5. Fill pinch of a ${sinnamon}`
// let step6 = `6. Fill pinch of a ${addition}`
// let step7 = "7. Start heating on a stove"
// let step8 = `8. Pour an aromatic ${coffee} in the cup`
// let orderPrice = `Your coffee price is ${price}$`
// let result = `Enjoy a cup of ${coffee}!`

// //add a steps to receipt
// let receipt = [task, step1, step2, step3, step4, step5, step6, step7, step8, orderPrice,result]
// let coffees = '';
// for (let i = 0; i < receipt.length; i++) {
//     coffees = coffees + receipt[i] + '\n'
// }
// console.log(coffees)
