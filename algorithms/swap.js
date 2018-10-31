function swap (array, i, j){

    var aux = array[i];
    array[i] = array[j];
    array[j] = aux;

    return array;
}

module.exports = swap;