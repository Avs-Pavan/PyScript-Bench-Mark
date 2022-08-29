
 function doSort() {
    fetch('./js/million.json')
    .then(res => res.json())
    .then(data=> {
        console.log("Table creation started")
        const start = performance.now()
        mergeSort(data)
        const duration = performance.now() - start
        console.log("Time taken to merge sort  1M numbers" )
        colorLog(duration,"success")
    })
}
function mergeSort(array) {
    const half = array.length / 2
    if (array.length < 2) {
        return array
    }
    const left = array.splice(0, half)
    return merge(mergeSort(left), mergeSort(array))
}

function merge(left, right) {
    let arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    return [...arr, ...left, ...right]
}

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

function multiply(){
    var m1 = [[1,2],[3,4]]
    var m2 = [[5,6],[7,8]]
    console.log("Matrix multiplication started")
    const start = performance.now()
    var ressult = multiplyMatrices(m1, m2) 
    // console.log(ressult)
    const duration = performance.now() - start
    console.log("Time taken to perform Matrix multiplication" )
    colorLog(duration,"success")
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

 //polinomial hash and heap sort.
 