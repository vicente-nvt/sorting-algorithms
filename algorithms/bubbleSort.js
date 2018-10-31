var swap = require("../algorithms/swap");

function sort(givenArray){

    for (var i = 0; i < givenArray.length; i++){
        for (var j = i; j < givenArray.length; j++){
            if (givenArray[j] < givenArray[i])
                swap(givenArray, i, j);
        }
    }

    return givenArray;
}

module.exports = sort;