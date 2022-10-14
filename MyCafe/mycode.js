let coffee;
let cupOfCoffeeBlack = "black coffee";
let cupOfCoffeeWhite = "latte";
let cupOfCoffeeHot = "hot chocolate";

let cupSize
let smallCup = "small cup";
let mediumCup = "medium cup";
let largeCup = "large cup";

let jezve = "golden jezve" 
let beans = "grained Arabica coffee beans"
let water = "distiled water"
let sugar = "cane sugar"

let cardamom = "Guatemala cardamom"
let sinnamon = "Indian sinnamon"
let milk = "milk cream"
let chocolate = "black chocolate"

let addition
let price = 5
//make a choice
coffee = cupOfCoffeeHot;
cupSize = largeCup;
addition = cardamom;

if (coffee == cupOfCoffeeBlack) {
  addition = chocolate
}
else {
  addition = cardamom
}

//show cup size
console.log("Welcome to my home cafe!");
console.log("We have different cup sizes. Please choose one.\n");

let cupSizes = [smallCup, mediumCup, largeCup]
for (let i in cupSizes) {
    if (cupSizes[i] == smallCup) {
        console.log(cupSizes[i] + '- ' + price + '$')
    }
    else if (cupSizes[i] == mediumCup) {
        price *= 1.5
        console.log(cupSizes[i] + '- ' + price + '$')
    } else if (cupSizes[i] == largeCup) {
        price *= 2
        console.log(cupSizes[i] + '- ' + price + '$')
    } 
    if (i == cupSizes.length - 1) {
        console.log('\n')
    }   
}

//show coffee types
let coffeeBlackRecipe = "CoffeeBlack:\n 10 gramms of coffee beans \n 1 cup of water \n 1 spoon of sugar \n"
let coffeeWhiteRecipe = "CoffeeWhite:\n 10 gramms of coffee beans \n 1 cup of water \n 1 spoon of sugar \n milk \n"
let coffeeHotRecipe = "CoffeeHot:\n 10 gramms of coffee beans \n 1 cup of water \n 1 spoon of sugar \n hot chocolate"

console.log('I have following coffee types \n')
let menu = [coffeeBlackRecipe, coffeeWhiteRecipe, coffeeHotRecipe]
for (let i = 0; i < menu.length; i++) {
    console.log(menu[i])
}

let task = `Make a ${cupSize} of ${coffee}`
let step1 = `1. Take a ${jezve}` 
let step2 = `2. Fill ten gramms of ${beans}`
let step3 = `3. Pour one cup of ${water}`
let step4 = `4. Fill one spoon of ${sugar}`
let step5 = `5. Fill pinch of a ${sinnamon}`
let step6 = `6. Fill pinch of a ${addition}`
let step7 = "7. Start heating on a stove"
let step8 = `8. Pour an aromatic ${coffee} in the cup`
let orderPrice = `Your coffee price is ${price}$`
let result = `Enjoy a cup of ${coffee}!`

//add a steps to receipt
let receipt = [task, step1, step2, step3, step4, step5, step6, step7, step8, orderPrice,result]
let coffees = '';
for (let i = 0; i < receipt.length; i++) {
    coffees = coffees + receipt[i] + '\n'
}
console.log(coffees)