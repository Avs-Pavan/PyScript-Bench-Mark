
function doSort() {
    fetch('./js/million.json')
        .then(res => res.json())
        .then(data => {
            console.log("Table creation started")
            const start = performance.now()
            var arr_size = data.length;
            mergeSort(data, 0, arr_size - 1)
            const duration = performance.now() - start
            console.log("Time taken to merge sort  1M numbers")
            colorLog(duration, "success")
        })
}
// function mergeSort(array) {
//     const half = array.length / 2
//     if (array.length < 2) {
//         return array
//     }
//     const left = array.splice(0, half)
//     return merge(mergeSort(left), mergeSort(array))
// }

// function merge(left, right) {
//     let arr = []
//     while (left.length && right.length) {
//         if (left[0] < right[0]) {
//             arr.push(left.shift())
//         } else {
//             arr.push(right.shift())
//         }
//     }
//     return [...arr, ...left, ...right]
// }

function multiplyMatrices(m1, m2) {
    var result = [];
    for (var i = 0; i < m1.length; i++) {
        result[i] = [];
        for (var j = 0; j < m2[0].length; j++) {
            var sum = 0;
            for (var k = 0; k < m1[0].length; k++) {
                sum += m1[i][k] * m2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

function multiply() {
    var m1 = [[1, 2], [3, 4]]
    var m2 = [[5, 6], [7, 8]]
    console.log("Matrix multiplication started")
    const start = performance.now()
    var ressult = multiplyMatrices(m1, m2)
    console.log(ressult)
    const duration = performance.now() - start
    console.log("Time taken to perform Matrix multiplication")
    colorLog(duration, "success")
}


function colorLog(message, color) {

    color = color || "black";

    switch (color) {
        case "success":
            color = "Green";
            break;
        case "info":
            color = "DodgerBlue";
            break;
        case "error":
            color = "Red";
            break;
        case "warning":
            color = "Orange";
            break;
        default:
            color = color;
    }

    console.log("%c" + message, "color:" + color);
}

function hash() {
    const start = performance.now()
    const polynomialHash = new Hash();
    polynomialHash.compute_hashes('geeksforgeeks')
    const duration = performance.now() - start
    console.log("Time taken to perform polynomial hash")
    colorLog(duration, "success")
}


function heapSortData() {

    fetch('./js/million.json')
        .then(res => res.json())
        .then(data => {
            const start = performance.now()
            heapSort(data);
            const duration = performance.now() - start
            console.log("Time taken to perform heap sort 1M numbers.")
            colorLog(duration, "success")
        })

}

function heapSort( arr)
    {
        var N = arr.length;
 
        // Build heap (rearrange array)
        for (var i = Math.floor(N / 2) - 1; i >= 0; i--)
            heapify(arr, N, i);
 
        // One by one extract an element from heap
        for (var i = N - 1; i > 0; i--) {
            // Move current root to end
            var temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
 
            // call max heapify on the reduced heap
            heapify(arr, i, 0);
        }
    }
 
    // To heapify a subtree rooted with node i which is
    // an index in arr[]. n is size of heap
    function heapify(arr, N, i)
    {
        var largest = i; // Initialize largest as root
        var l = 2 * i + 1; // left = 2*i + 1
        var r = 2 * i + 2; // right = 2*i + 2
 
        // If left child is larger than root
        if (l < N && arr[l] > arr[largest])
            largest = l;
 
        // If right child is larger than largest so far
        if (r < N && arr[r] > arr[largest])
            largest = r;
 
        // If largest is not root
        if (largest != i) {
            var swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;
 
            // Recursively heapify the affected sub-tree
            heapify(arr, N, largest);
        }
    }
 
   

// var array_length;
// /* to create MAX  array */
// function heap_root(input, i) {
//     var left = 2 * i + 1;
//     var right = 2 * i + 2;
//     var max = i;

//     if (left < array_length && input[left] > input[max]) {
//         max = left;
//     }

//     if (right < array_length && input[right] > input[max]) {
//         max = right;
//     }

//     if (max != i) {
//         swap(input, i, max);
//         heap_root(input, max);
//     }
// }

// function swap(input, index_A, index_B) {
//     var temp = input[index_A];
//     input[index_A] = input[index_B];
//     input[index_B] = temp;
// }

// function heapSort(input) {
//     array_length = input.length;
//     for (var i = Math.floor(array_length / 2); i >= 0; i -= 1) {
//         heap_root(input, i);
//     }
//     for (i = input.length - 1; i > 0; i--) {
//         swap(input, 0, i);
//         array_length--;
//         heap_root(input, 0);
//     }
// }


const p1 = 31;
const p2 = 37;
const m1 = 100;
const m2 = 100;
class Hash {

  compute_hashes(str) {
     var pow1 = 1;
     var pow2 = 1;
     var hash1 = 0;
     var hash2 = 0;
      for (const ch of str) {
       var seed = 1 + ch.charCodeAt() - 'a'.charCodeAt();
        hash1 = (hash1 + seed * pow1) % 100000007;
        hash2 = (hash2 + seed * pow2) % 100000009;
        pow1 = (pow1 * 31) % 100000007;
        pow2 = (pow2 * 37) % 100000009;
      }
      console.log(hash1+"---"+hash2);
    }
  }



function merge(arr, l, m, r) {
    var n1 = m - l + 1;
    var n2 = r - m;

    // Create temp arrays
    var L = new Array(n1);
    var R = new Array(n2);

    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    // Merge the temp arrays back into arr[l..r]

    // Initial index of first subarray
    var i = 0;

    // Initial index of second subarray
    var j = 0;

    // Initial index of merged subarray
    var k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
function mergeSort(arr, l, r) {
    if (l >= r) {
        return;//returns recursively
    }
    var m = l + parseInt((r - l) / 2);
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
}
