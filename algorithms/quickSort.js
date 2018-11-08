var swap = require("../helpers/swap");

function sort(givenArray){
    var left = 0;
    var right = givenArray.length - 1;

    return quick(givenArray, left, right);
}

function quick(givenArray, left, right){
    var index;

    if (givenArray.length > 1)  {
    
        index = partition(givenArray, left, right);

        if (left < index - 1)
            quick(givenArray, left, index - 1);

        if (right > index) {
            quick(givenArray, index, right);
        }
    }

    return givenArray;
}

function partition(givenArray, left, right){
    var pivot = givenArray[Math.floor((left + right)/2)];
    var indexOfLeft = left;
    var indexOfRight = right;

    while (indexOfLeft <= indexOfRight) {

        while (givenArray[indexOfLeft] < pivot)
            indexOfLeft++;

        while (givenArray[indexOfRight] > pivot)
            indexOfRight--;

        if (indexOfLeft <= indexOfRight){
            swap(givenArray, indexOfLeft, indexOfRight);
            indexOfLeft++;
            indexOfRight--;
        }
    }

    return indexOfLeft;
}

module.exports = sort;