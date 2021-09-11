function saturdayFun(word = "roller-skate") {
    return `This Saturday, I want to ${word}!`;
}

const mondayWork = function(word = "go to the office") {
    return `This Monday, I will ${word}.`
} 

function wrapAdjective(flair = "*") {
    return function(param = "special") {
        return `You are ${flair}${param}${flair}!`
    }
}

const Calculator = {
    add: function(num1, num2) {
        return num1 + num2;
    },
    subtract: function(num1, num2) {
        return num1 - num2;
    },
    multiply: function(num1, num2) {
        return num1 * num2;
    },
    divide: function(num1, num2) {
        return num1 / num2;
    }
 }

 function actionApplyer(start, fncArray) {
    function reducer(previous, current){
        return current(previous);
    }
    return fncArray.reduce(reducer, start);
 }