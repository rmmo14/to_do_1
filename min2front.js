function mintoFront(arr) {
    var holder;
    var min = arr[0];
    // first need to find the min in the whole array
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            var index = i;
        }
    }
    console.log('min is', min);
    holder = arr[0];
    arr[0] = min;
    arr[index] = holder;
    console.log('see', arr);
    return arr;
}
mintoFront([2, 3, 1, 4, 5, -1]);