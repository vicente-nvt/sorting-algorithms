var mergeSort = require("../algorithms/mergeSort");
var ArrayGenerator = require("../helpers/arrayGenerator");

describe("Tests for Merge Sort", () => {

    var arrayGenerator = new ArrayGenerator();

    it ("should sort a small integer array with Merge Sort", () => {
        var givenArray = arrayGenerator.getSmallIntegerArray();
        var sortedExpectedArray = arrayGenerator.getSmallSortedIntegerArray();

        var sortedArray = mergeSort(givenArray);

        expect(sortedExpectedArray).toEqual(sortedArray);
    });

    it ("should sort a big integer array with Merge Sort", () => {
        var givenArray = arrayGenerator.getBigIntegerArray();
        var sortedExpectedArray = arrayGenerator.getBigSortedIntegerArray();
            
        var sortedArray = mergeSort(givenArray);

        expect(sortedExpectedArray).toEqual(sortedArray);
    });
});