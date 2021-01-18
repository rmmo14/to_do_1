function pushFront(arr, num) {
    var holder;
    arr.push(num);
    for (var i = arr.length - 1; i > 0; i--) {
        holder = arr[i];
        console.log('holder is', holder);
        arr[i] = arr[i - 1];
        arr[i - 1] = holder;
    }
    console.log(arr);
    return arr;
}
// pushFront([5, 6, 3, 9], -1);

function popFront(arr) {
    var holder;
    console.log(arr.length);
    for (var i = 0; i < arr.length - 1; i++) {
        holder = arr[i];
        console.log('holder is', holder);
        arr[i] = arr[i + 1];
        arr[i + 1] = holder;
    }
    arr.pop();
    console.log(arr);
    return holder;
}
// popFront([12, 14, 52, 60]);

function insertAt(arr, index, num) {
    var holder;
    arr.push(num);
    for (var i = arr.length - 1; i > index; i--) {
        holder = arr[i];
        console.log('holder is', holder);
        arr[i] = arr[i - 1];
        arr[i - 1] = holder;
    }
    console.log(arr);
    return arr;
}
// insertAt([2, 3, 4], 2, 100);

function removeAt(arr, index) {
    var holder;
    for (var i = index; i < arr.length - 1; i++) {
        holder = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = holder;
    }
    arr.pop();
    return holder;
}
// removeAt([2, 4, 6, 8], 2)

function swapPairs(arr) {
    var holder;
    if (arr.length % 2 == 0) {
        for (var i = 0; i < arr.length - 1; i += 2) {
            holder = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = holder;
        }
        return arr;
    } else {
        var last = arr[arr.length - 1];
        arr.pop();
        for (var i = 0; i < arr.length - 1; i += 2) {
            holder = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = holder;
        }
        arr.push(last);
        return arr;
    }
}
// swapPairs([1, 2, 3, 4, 5, 6]);
// swapPairs([9, 8, 7, 6, 5, 4, 3]);


function removeDuplicates(arr) {
    var holder;
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            holder = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = holder;
        }
    }
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] != arr[j + 1]) {
            newArr.push(arr[j]);
        } else {
            newArr.push(arr[j]);
            j++;
        }
    }
    console.log('sorted', arr);
    console.log('no duplicates', newArr);
    return newArr;
}
// removeDuplicates([1, 2, 1, 3, 3, 6]);