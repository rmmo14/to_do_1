function reverse(arr) {
    var holder;
    for (var j = arr.length; j > 0; j--) {
        for (var i = 0; i < j - 1; i++) {
            holder = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = holder;
        }
    }
    console.log(arr);
    return arr;
}
reverse([1, 100, 2, 33, 3, 4]);

function rotateArr(arr, shiftBy) {
    var t = Math.abs(shiftBy);
    while (t > 0) {
        if (shiftBy > 0) {
            var temp = arr[arr.length - 1];
            for (var i = arr.length - 1; i > 0; i--) {
                arr[i] = arr[i - 1];
            }
            arr[0] = temp;
        } else {
            var temp = arr[0];
            for (var i = 0; i < arr.length - 1; i++) {
                arr[i] = arr[i + 1];
            }
            arr[arr.length - 1] = temp;
        }
        t--;
    }
    // var newIndex;
    // var holder;
    // for (var i = 0; i < arr.length - 1; i++) {
    //     newIndex = (i + shiftBy) % arr.length;
    //     holder = arr[i];
    //     arr[i] = arr[newIndex];
    //     arr[newIndex] = holder;
    // }
    console.log('rotated', arr)
        // return arr;
}
rotateArr([4, 5, 6, 7], -1);

function filterRange(arr, min, max) {
    var count;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] <= min || arr[i] >= max) {
            for (var j = i; j < arr.length - 1; j++) {
                arr[j] = arr[j + 1];
            }
            arr.length = arr.length - 1;
            i--;
        }
    }
    console.log(arr)
}
filterRange([1, 2, 3, 4, 5, 6], 2, 5);