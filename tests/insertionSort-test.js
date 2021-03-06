var insertionSort = require("../algorithms/insertionSort");
var ArrayGenerator = require("../helpers/arrayGenerator");

describe("Tests for Bubble Sort", () => {

    var arrayGenerator = new ArrayGenerator();

    it ("should sort a small integer array with insertionSort", () => {
        var givenArray = arrayGenerator.getSmallIntegerArray();
        var sortedExpectedArray = arrayGenerator.getSmallSortedIntegerArray();

        var sortedArray = insertionSort(givenArray);

        expect(sortedExpectedArray).toEqual(sortedArray);
    });

    it ("should sort a big integer array with insertionSort", () => {
        var givenArray = arrayGenerator.getBigIntegerArray();
        var sortedExpectedArray = arrayGenerator.getBigSortedIntegerArray();
            
        var sortedArray = insertionSort(givenArray);

        expect(sortedExpectedArray).toEqual(sortedArray);
    });
});