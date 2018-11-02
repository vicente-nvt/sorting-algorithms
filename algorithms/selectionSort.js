var swap = require("../helpers/swap");

function sort(givenArray) {

    for (var i = 0; i < givenArray.length; i++){

        var indexOfMin = i;
        minValue = givenArray[i];

        for (var  j = indexOfMin; j < givenArray.length; j++){
            if (givenArray[j] < minValue){
                minValue = givenArray[j];
                indexOfMin = j;
            }
        }

        if (indexOfMin !== i)
            swap(givenArray, i, indexOfMin);
    }

    return givenArray;
}

module.exports = sort;