function sort(givenArray) {

    if (givenArray.length == 1) return givenArray;

    var middle = Math.floor(givenArray.length/2);

    var left = givenArray.slice(0, middle);
    var right = givenArray.slice(middle, givenArray.length);

    return merge(sort(left), sort(right));
}

function merge(left, right){

    var indexOfLeft = 0;
    var indexOfRight = 0;
    var result = [];

    while (indexOfLeft < left.length && indexOfRight < right.length) {

        if (left[indexOfLeft] < right[indexOfRight])
            result.push(left[indexOfLeft++]);
        else
            result.push(right[indexOfRight++]);
    }

    while (indexOfLeft < left.length)
        result.push(left[indexOfLeft++]);

    while (indexOfRight < right.length)
        result.push(right[indexOfRight++]);

    return result;
}

module.exports = sort;