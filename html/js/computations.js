
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
    const polynomialHash = new PolynomialHash({ base: 3583213, modulus: 100 });
    polynomialHash.hash('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum');
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
var array_length;
/* to create MAX  array */
function heap_root(input, i) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;

    if (left < array_length && input[left] > input[max]) {
        max = left;
    }

    if (right < array_length && input[right] > input[max]) {
        max = right;
    }

    if (max != i) {
        swap(input, i, max);
        heap_root(input, max);
    }
}

function swap(input, index_A, index_B) {
    var temp = input[index_A];
    input[index_A] = input[index_B];
    input[index_B] = temp;
}

function heapSort(input) {
    array_length = input.length;
    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1) {
        heap_root(input, i);
    }
    for (i = input.length - 1; i > 0; i--) {
        swap(input, 0, i);
        array_length--;
        heap_root(input, 0);
    }
}





const DEFAULT_BASE = 37;
const DEFAULT_MODULUS = 101;

class PolynomialHash {
    /**
     * @param {number} [base] - Base number that is used to create the polynomial.
     * @param {number} [modulus] - Modulus number that keeps the hash from overflowing.
     */
    constructor({ base = DEFAULT_BASE, modulus = DEFAULT_MODULUS } = {}) {
        this.base = base;
        this.modulus = modulus;
    }

    /**
     * Function that creates hash representation of the word.
     *
     * Time complexity: O(word.length).
     *
     * @param {string} word - String that needs to be hashed.
     * @return {number}
     */
    hash(word) {
        const charCodes = Array.from(word).map((char) => this.charToNumber(char));

        let hash = 0;
        for (let charIndex = 0; charIndex < charCodes.length; charIndex += 1) {
            hash *= this.base;
            hash += charCodes[charIndex];
            hash %= this.modulus;
        }

        return hash;
    }

    /**
     * Function that creates hash representation of the word
     * based on previous word (shifted by one character left) hash value.
     *
     * Recalculates the hash representation of a word so that it isn't
     * necessary to traverse the whole word again.
     *
     * Time complexity: O(1).
     *
     * @param {number} prevHash
     * @param {string} prevWord
     * @param {string} newWord
     * @return {number}
     */
    roll(prevHash, prevWord, newWord) {
        let hash = prevHash;

        const prevValue = this.charToNumber(prevWord[0]);
        const newValue = this.charToNumber(newWord[newWord.length - 1]);

        let prevValueMultiplier = 1;
        for (let i = 1; i < prevWord.length; i += 1) {
            prevValueMultiplier *= this.base;
            prevValueMultiplier %= this.modulus;
        }

        hash += this.modulus;
        hash -= (prevValue * prevValueMultiplier) % this.modulus;

        hash *= this.base;
        hash += newValue;
        hash %= this.modulus;

        return hash;
    }

    /**
     * Converts char to number.
     *
     * @param {string} char
     * @return {number}
     */
    charToNumber(char) {
        let charCode = char.codePointAt(0);

        // Check if character has surrogate pair.
        const surrogate = char.codePointAt(1);
        if (surrogate !== undefined) {
            const surrogateShift = 2 ** 16;
            charCode += surrogate * surrogateShift;
        }

        return charCode;
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
