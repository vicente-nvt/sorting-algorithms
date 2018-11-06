var selectionSort = require("../algorithms/selectionSort");
var ArrayGenerator = require("../helpers/arrayGenerator");

describe("Tests for Bubble Sort", () => {

    var arrayGenerator = new ArrayGenerator();

    it ("should sort a small integer array with Selection Sort", () => {
        var givenArray = arrayGenerator.getSmallIntegerArray();
        var sortedExpectedArray = arrayGenerator.getSmallSortedIntegerArray();

        var sortedArray = selectionSort(givenArray);

        expect(sortedExpectedArray).toEqual(sortedArray);
    });

    it ("should sort a big integer array with Selection Sort", () => {
        var givenArray = arrayGenerator.getBigIntegerArray();
        var sortedExpectedArray = arrayGenerator.getBigSortedIntegerArray();
            
        var sortedArray = selectionSort(givenArray);

        expect(sortedExpectedArray).toEqual(sortedArray);
    });
});