var quickSort = require("../algorithms/quickSort");
var ArrayGenerator = require("../helpers/arrayGenerator");

describe("Tests for Quick Sort", () => {

    var arrayGenerator = new ArrayGenerator();

    it ("should sort a small integer array with Quick Sort", () => {
        var givenArray = arrayGenerator.getSmallIntegerArray();
        var sortedExpectedArray = arrayGenerator.getSmallSortedIntegerArray();

        var sortedArray = quickSort(givenArray);

        expect(sortedExpectedArray).toEqual(sortedArray);
    });

    it ("should sort a big integer array with Quick Sort", () => {
        var givenArray = arrayGenerator.getBigIntegerArray();
        var sortedExpectedArray = arrayGenerator.getBigSortedIntegerArray();

        var sortedArray = quickSort(givenArray);

        expect(sortedExpectedArray).toEqual(sortedArray);
    });
});