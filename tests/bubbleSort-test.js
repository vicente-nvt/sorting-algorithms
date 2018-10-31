var bubbleSort = require("../algorithms/bubbleSort");
var ArrayGenerator = require("../helpers/arrayGenerator");

describe("Tests for Bubble Sort", () => {

    var arrayGenerator = new ArrayGenerator();

    it ("should sort an integer array", () => {
        var givenArray = arrayGenerator.getSmallIntegerArray();
        var sortedExpectedArray = arrayGenerator.getSmallSortedIntegerArray();

        var sortedArray = bubbleSort(givenArray);

        expect(sortedExpectedArray).toEqual(sortedArray);
    });

    it ("should sort a big integer array", () => {
        var givenArray = arrayGenerator.getBigIntegerArray();
        var sortedExpectedArray = arrayGenerator.getBigSortedIntegerArray();
            
        var sortedArray = bubbleSort(givenArray);

        expect(sortedExpectedArray).toEqual(sortedArray);
    });
});