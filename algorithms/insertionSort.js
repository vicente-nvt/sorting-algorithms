var swap = require("../helpers/swap");

function sort(givenArray){

    for (var i = 1; i < givenArray.length; i++){ 

        var indexOfCurrentPosition = i;
        var valueOfCurrentPosition = givenArray[i];

        while (indexOfCurrentPosition > 0 && givenArray[indexOfCurrentPosition - 1] > valueOfCurrentPosition){
            givenArray[indexOfCurrentPosition] = givenArray[indexOfCurrentPosition - 1];
            indexOfCurrentPosition--;
        }

        givenArray[indexOfCurrentPosition] = valueOfCurrentPosition;
    }

    return givenArray;
}

module.exports = sort;

