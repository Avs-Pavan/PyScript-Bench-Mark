# PyScript Benchmark
#### A battle between PyScript and JavaScript

## 1. Dom manipulation

In this Benchark We are going to do some UI manipulation tasks using both PyScript and JavaScript and  measure the performance of both.

List of tasks for Dom Manipulation:
 - Adding 10k rows to a table.
 - Updating a column of all rows. 
 - Delete even rows of the table with 10k rows.
 - Delete all the rows of the table with 10k rows.

### 1. Adding 10k rows to table.

#### Js

```
function addRows() {
   var tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
   console.log("Table creation started")
   const start = performance.now();
   for (i = 0; i <= 10000; i++) {
      var newRow = tableRef.insertRow(tableRef.rows.length);
      var idCell = newRow.insertCell(0)
      idCell.appendChild(document.createTextNode(i + 1))
      var nameCell = newRow.insertCell(1);
      var name = document.createTextNode('Person  ' + i)
      nameCell.appendChild(name);
      var ageCell = newRow.insertCell(2);
      var age = document.createTextNode(20);
      ageCell.appendChild(age);
   }
   const duration = performance.now() - start;
   console.log("Time taken to create 10000 rows " );
   colorLog(duration,"success");
}
```

#### PyScript

```
def addrowspy(*args):
    start = time.time()
    tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0]
    for i in range(10000):
        newRow = tableRef.insertRow(tableRef.rows.length)
        idCell = newRow.insertCell(0)
        idCell.appendChild(document.createTextNode(i + 1))
        nameCell = newRow.insertCell(1)
        name = document.createTextNode('Person  ' + str(i))
        nameCell.appendChild(name)
        ageCell = newRow.insertCell(2)
        age = document.createTextNode(20)
        ageCell.appendChild(age)
    end = time.time()
    console.log(end-start)
```


Here we are adding 10k rows to a table and measuring the taken to complete the task.

#### Results

| Bech mark     | JavaScript    | PyScript |
| ------------- | ------------- | -------- |
| `Adding 10K rews to a table` |  357 milli seconds | 1707 milli seconds |




### 2. Updating a column of all rows.

#### Js

```
function increaseAge() {
   console.log("Updating all rows from table.")
   const start = performance.now();
   var myTable = document.getElementById('myTable')
   for (i = 1; i < 10000; i++) {
      var cells = myTable.rows[i].cells;
      var age = parseInt(cells[2].innerHTML)
      cells[2].innerHTML = age + 1;
   }
   const duration = performance.now() - start;
   console.log("Time taken to update all rows ");
   colorLog(duration,"success");
}

```

#### PyScript

```
def increaseAge(*args):
    start = time.time()
    myTable = document.getElementById('myTable')
    i=0
    for i in range(10000):
        cells = myTable.rows[i].cells
        cells[2].innerHTML = str(21)
    end = time.time()
    console.log(end-start)
```


Here we are updating a single column of all the 10k rows and measuring the taken to complete the task.

#### Results

| Bech mark     | JavaScript    | PyScript |
| ------------- | ------------- | -------- |
| `Updating a column of all rows` |  687 milli seconds | 1608 milli seconds |




### 3. Delete even rows of the table with 10k rows.

#### Js

```
function clearEvenRows() {
   console.log("Deleting all rows from table.")
   const start = performance.now();
   var myTable = document.getElementById('myTable')
   var rowCount = myTable.rows.length;
   while (--rowCount) {
      if (rowCount % 2 == 0)
         myTable.deleteRow(rowCount);
   }
   const duration = performance.now() - start;
   console.log("Time taken to delete all rows ");
   colorLog(duration,"success");
}
```

#### PyScript

```
def clearEvenRows(*args):
    start = time.time()
    myTable = document.getElementById('myTable')
    rowCount = myTable.rows.length
    i = 1
    while i < rowCount:
        try:
            id = myTable.rows[i].cells[0].innerHTML
            if int(id) % 2 == 0:
                myTable.deleteRow(i)
            i += 1
        except Exception as e:
            break
    end = time.time()
    console.log(end-start)
```


Here we are deleting all the even rows in the table with 10k records.

#### Results

| Bech mark     | JavaScript    | PyScript |
| ------------- | ------------- | -------- |
| `Delete even rows of the table with 10k rows` |  298 milli seconds | 954 milli seconds |



### 4. Delete all the rows of the table with 10k rows.

#### Js

```
function clearTable() {
   console.log("Deleting all rows from table.")
   const start = performance.now();
   var myTable = document.getElementById('myTable')
   var rowCount = myTable.rows.length;
   while (--rowCount)
      myTable.deleteRow(rowCount);
   const duration = performance.now() - start;
   console.log("Time taken to delete all rows ");
   colorLog(duration,"success");
}
```

#### PyScript

```
def clearTable(*args):
    start = time.time()
    myTable = document.getElementById('myTable')
    rowCount = myTable.rows.length
    i = 1
    while i < (rowCount):
        try:
            myTable.deleteRow(i)
            i =+ 1
        except:
            break
    end = time.time()
    console.log(end-start)
```


Here we are deleting all the rows in the table with 10k records.

#### Results

| Bech mark     | JavaScript    | PyScript |
| ------------- | ------------- | -------- |
| `Delete all the rows of the table with 10k rows` |  387 milli seconds | 484 milli seconds |

### Dom manipulation bech mark result

| Bech mark     | JavaScript (Milli seconds)    | PyScript (Milli seconds) |
| :------------- | ------------- | -------- |
| `Adding 10K rews to a table` |  357 | 1707 |
| `Updating a column of all rows` |  687 | 1608 |
| `Delete even rows of the table with 10k rows` |  298 | 954 |
| `Delete all the rows of the table with 10k rows` |  387 | 484 |



## 2. Networking Benchmark

In this Benchark We are going to do Networking tasks using both PyScript and JavaScript and measure the performance of both. We are going to perform CRUD operations as a part of the tasks.

List of tasks for Networking:
 - Create data in server using `POST` request.
 - Read data from server using `GET` request.
 - Update data in server using `PUT` request. 
 - Delete data from server using `DELETE` request.
 - Fetch 100 records from the server.

### 1. Create data in server using `POST` request.

#### Js

```
function createUser() {
    console.log("Create record started")
    const start = performance.now()
    let user = {
        name: 'John',
        surname: 'Smith'
    };

    fetch('https://6304dc3c94b8c58fd726ccaf.mockapi.io/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    }).then(response => {
        const duration = performance.now() - start
        console.log("Time taken to create record")
        colorLog(duration, "success")
        console.log(response.json())
    })
    .catch(error => {
        console.log(error)
    });
}
```

#### PyScript

```
import asyncio  # important!!
import json
from request import request
from js import console

baseurl = "https://6304dc3c94b8c58fd726ccaf.mockapi.io/users"

start = time.time()
body = json.dumps({"name":"test_title"})
new_post = await request(baseurl, body=body, method="POST", headers=headers)
end = time.time()
console.log(end-start)
```


Here we are creating user in server using `POST` request.

#### Results

| Bech mark     | JavaScript (Milli seconds)   | PyScript |
| :------------- | :-------------: | :--------: |
| Create data in server using `POST` request |  174 | 095 |


### 2. Read data from server using `GET` request.

#### Js

```
function getSingleRecord(){
    console.log("Read single records started")
    const start = performance.now()
    fetch('https://6304dc3c94b8c58fd726ccaf.mockapi.io/users/86')
        .then(response => {
            const duration = performance.now() - start
            console.log("Time taken to read single record")
            colorLog(duration, "success")
            console.log(response.json())
        })
        .catch(error => {
            // handle the error
            console.log(error)
        });
}
```

#### PyScript

```
import asyncio  # important!!
import json
from request import request
from js import console

baseurl = "https://6304dc3c94b8c58fd726ccaf.mockapi.io/users"

start = time.time()
headers = {"Content-type": "application/json"}
response = await request(baseurl+"/86", method="GET", headers=headers)
end = time.time()
console.log(end-start)
```


Here we are reading single user from server using `GET` request.

#### Results

| Bech mark     | JavaScript (Milli seconds)   | PyScript |
| :------------- | :-------------: | :--------: |
| Read data from server using `GET` request. |  83 | 153 |



### 3. Update data in server using `PUT` request. 

#### Js

```
function updaateUser() {
    console.log("Update record started")
    const start = performance.now()
    let user = {
        name: 'John',
        surname: 'Smith updated'
    };

    fetch('https://6304dc3c94b8c58fd726ccaf.mockapi.io/users/86', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    }).then(response => {
        const duration = performance.now() - start
        console.log("Time taken to Update record")
        colorLog(duration, "success")
        console.log(response.json())
    })
    .catch(error => {
        console.log(error)
    });
}

```

#### PyScript

```
import asyncio  # important!!
import json
from request import request
from js import console

baseurl = "https://6304dc3c94b8c58fd726ccaf.mockapi.io/users"

start = time.time()
body = json.dumps({"name":"test_title"})
new_post = await request(baseurl+"/83", body=body, method="PUT", headers=headers)
end = time.time()
console.log(end-start)
```


Here we are updating single user from server using `PUT` request.

#### Results

| Bech mark     | JavaScript (Milli seconds)   | PyScript |
| :------------- | :-------------: | :--------: |
| Update data in server using `PUT` request.  |  131 | 160 |

### 4. Delete data from server using `DELETE` request.

#### Js

```
function deleteUser() {
    console.log("Delete record started")
    const start = performance.now()
  
    fetch('https://6304dc3c94b8c58fd726ccaf.mockapi.io/users/86', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    }).then(response => {
        const duration = performance.now() - start
        console.log("Time taken to Delete record")
        colorLog(duration, "success")
        console.log(response.json())
    })
    .catch(error => {
        console.log(error)
    });
}
```

#### PyScript

```
import asyncio  # important!!
import json
from request import request
from js import console

baseurl = "https://6304dc3c94b8c58fd726ccaf.mockapi.io/users"

start = time.time()
new_post = await request(baseurl+"/83", method="DELETE", headers=headers)
end = time.time()
console.log(end-start)
```


Here we are deleting single user from server using `DELETE` request.

#### Results

| Bech mark     | JavaScript (Milli seconds)   | PyScript |
| :------------- | :-------------: | :--------: |
| Delete data from server using `DELETE` request.  |  161 | 90 |





### 5. Read 100 records from server using `GET` request.

#### Js

```
function get100records() {

    console.log("Read 100 records started")
    const start = performance.now()
    fetch('https://6304dc3c94b8c58fd726ccaf.mockapi.io/users')
        .then(response => {
            const duration = performance.now() - start
            console.log("Time taken to read 100 records")
            colorLog(duration, "success")
            console.log(response.json())
        })
        .catch(error => {
            // handle the error
            console.log(error)
        });
}
```

#### PyScript

```
import asyncio  # important!!
import json
from request import request
from js import console

baseurl = "https://6304dc3c94b8c58fd726ccaf.mockapi.io/users"

start = time.time()
headers = {"Content-type": "application/json"}
response = await request(baseurl, method="GET", headers=headers)
end = time.time()
console.log(end-start)
```


Here we are reading 100 records from server using `GET` request.

#### Results

| Bech mark     | JavaScript (Milli seconds)   | PyScript |
| :------------- | :-------------: | :--------: |
| Read 100 records from server using `GET` request. |  103 | 150 |


### Networking bech mark result

| Bech mark     | JavaScript (Milli seconds)    | PyScript (Milli seconds) |
| :------------- | :-------------: | :--------: |
| Create data in server using `POST` request |  174 | 095 |
| Read data from server using `GET` request. |  83 | 153 |
| Update data in server using `PUT` request.  |  131 | 160 |
| Delete data from server using `DELETE` request.  |  161 | 90 |
| Fetch 100 records from the server.  |  103 | 150 |



## 3. Computation Benchmark

In this Benchark We are going to perform some computation tasks using both PyScript and JavaScript and measure the performance of both.

List of tasks for computation:
 - Merge sort 1M records.
 - Heap sort 1M records.
 - Matrix multiplication.
 - Depth first search. 
 - Polynomial hash.

### 1. Merge sort 1M records.

#### Js

```
function domergeSort() {
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

```

#### PyScript

```
import json
from js import console
from pyodide.http import open_url

# GET
start = time.time()
data = json.loads(open_url("https://raw.githubusercontent.com/kevinOcconer/million/main/million.json").read())

def mergeSort(arr):
    if len(arr) > 1:
 
         # Finding the mid of the array
        mid = len(arr)//2
 
        # Dividing the array elements
        L = arr[:mid]
 
        # into 2 halves
        R = arr[mid:]
 
        # Sorting the first half
        mergeSort(L)
 
        # Sorting the second half
        mergeSort(R)
 
        i = j = k = 0
 
        # Copy data to temp arrays L[] and R[]
        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1
 
        # Checking if any element was left
        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1
 
        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1
print("Merge sort")
mid = time.time()
mergeSort(data)
end = time.time()
print(end-mid)
print("completed") 
```


Here we are sorting 1M records using Merge sort.

#### Results

| Bech mark     | JavaScript (Milli seconds)   | PyScript |
| :------------- | :-------------: | :--------: |
| Merge sort 1M records |  174 | 095 |



### 2. Heap sort 1M records.

#### Js

```
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
```

#### PyScript

```
import json
from js import console
from pyodide.http import open_url

# GET
start = time.time()
data = json.loads(open_url("https://raw.githubusercontent.com/kevinOcconer/million/main/million.json").read())

def heapify(arr, N, i):
    largest = i  # Initialize largest as root
    l = 2 * i + 1     # left = 2*i + 1
    r = 2 * i + 2     # right = 2*i + 2
 
    # See if left child of root exists and is
    # greater than root
    if l < N and arr[largest] < arr[l]:
        largest = l
 
    # See if right child of root exists and is
    # greater than root
    if r < N and arr[largest] < arr[r]:
        largest = r
 
    # Change root, if needed
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]  # swap
 
        # Heapify the root.
        heapify(arr, N, largest)
 
# The main function to sort an array of given size
 
 
def heapSort(arr):
    N = len(arr)
 
    # Build a maxheap.
    for i in range(N//2 - 1, -1, -1):
        heapify(arr, N, i)
 
    # One by one extract elements
    for i in range(N-1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]  # swap
        heapify(arr, i, 0)
 
 
# Driver's code
if __name__ == '__main__':
    print("Heap Sort")
    mid = time.time()
    hash = heapSort(data)
    end = time.time()
    print(end-mid)
```


Here we are using heap sort to 1M records and measuring the time taken to complete the task.

#### Results

| Bech mark     | JavaScript (Milli seconds)    | PyScript (Milli seconds) |
| :------------- | :-------------: | :--------: |
| `Heap sort 1M records.` |  357 | 1707 |




### 3. Depth first search 10k times. 

#### Js

```
class Graph
{
     
    // Constructor
    constructor(v)
    {
        this.V = v;
        this.adj = new Array(v);
        for(let i = 0; i < v; i++)
            this.adj[i] = [];
    }
     
    // Function to add an edge into the graph
    addEdge(v, w)
    {
         
        // Add w to v's list.
        this.adj[v].push(w);
    }
     
    // A function used by DFS
    DFSUtil(v, visited)
    {
         
        // Mark the current node as visited and print it
        visited[v] = true;
        // console.log(v + " ");
  
        // Recur for all the vertices adjacent to this
        // vertex
        for(let i of this.adj[v].values())
        {
            let n = i
            if (!visited[n])
                this.DFSUtil(n, visited);
        }
    }
     
    // The function to do DFS traversal.
    // It uses recursive
    // DFSUtil()
    DFS(v)
    {
         
        // Mark all the vertices as
        // not visited(set as
        // false by default in java)
        let visited = new Array(this.V);
        for(let i = 0; i < this.V; i++)
            visited[i] = false;
  
        // Call the recursive helper
        // function to print DFS
        // traversal
        this.DFSUtil(v, visited);
    }
}
 


  function searchDfs(){
    // Driver Code
g = new Graph(4);
  
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);
   
    //console.log(testTree.traverseBFS());
  

    console.log("Depth first search started")
    const start = performance.now()
    for(let x = 0; x<10000; x++){
        g.DFS(2);
    }

    const duration = performance.now() - start
    console.log("Time taken perform DFS" )
    colorLog(duration,"success")
  }

```

#### PyScript

```
from collections import defaultdict

class Graph:
    # Constructor
    def __init__(self):
        # default dictionary to store graph
        self.graph = defaultdict(list)
 
    # Function to add an edge to graph
    def addEdge(self, u, v):
        self.graph[u].append(v)
    # A function used by DFS
 
    def DFSUtil(self, v, visited):
        # Mark the current node as visited and print it
        visited.add(v)
        <!-- print(v,end=" ") -->
 
        # recur for all the vertices adjacent to this vertex
        for neighbour in self.graph[v]:
            if neighbour not in visited:
                self.DFSUtil(neighbour, visited)
        # The function to do DFS traversal. It uses recursive DFSUtil
 
    def DFS(self):
        # create a set to store all visited vertices
        visited = set()
        # call the recursive helper function to print DFS traversal starting from all
        # vertices one by one
        for vertex in self.graph:
            if vertex not in visited:
                self.DFSUtil(vertex, visited)
# Driver code
# create a graph given in the above diagram
 
print("Following is Depth First Traversal \n")
g = Graph()
g.addEdge(0, 1)
g.addEdge(0, 2)
g.addEdge(1, 2)
g.addEdge(2, 0)
g.addEdge(2, 3)
g.addEdge(3, 3)
print("DFS")
mid = time.time()
for x in range(10000):
    g.DFS()
end = time.time()
print(end-mid)  

```


Here we are using heap sort to 1M records and measuring the time taken to complete the task.

#### Results

| Bech mark     | JavaScript (Milli seconds)    | PyScript (Milli seconds) |
| :------------- | :-------------: | :--------: |
| `Depth first search a graph 10k times.` |  23 | 37 |




### 4. Polynomial hash 10k times. 

#### Js

```
const DEFAULT_BASE = 37;
const DEFAULT_MODULUS = 101;

export default class PolynomialHash {
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

function hash() {
    const start = performance.now()
    const polynomialHash = new Hash();
    for(let x = 0; x<10000; x++){
        polynomialHash.compute_hashes('geeksforgeeks');
    }
    const duration = performance.now() - start
    console.log("Time taken to perform polynomial hash")
    colorLog(duration, "success")
}

```

#### PyScript

```
class Hash:
    def __init__(self, s: str):
        self.p1, self.m1 = 31, 10**9 + 7
        self.p2, self.m2 = 37, 10**9 + 9
        self.hash1, self.hash2 = 0, 0
        self.compute_hashes(s)
    def compute_hashes(self, s: str):
        pow1, pow2 = 1, 1
        hash1, hash2 = 0, 0
        for ch in s:
            seed = 1 + ord(ch) - ord('a')
            hash1 = (hash1 + seed * pow1) % self.m1
            hash2 = (hash2 + seed * pow2) % self.m2
            pow1 = (pow1 * self.p1) % self.m1
            pow2 = (pow2 * self.p2) % self.m2
        self.hash1, self.hash2 = hash1, hash2

def __eq__(self, other):
    return self.hash1 == other.hash1 and self.hash2 == other.hash2

def __str__(self):
    return f'({self.hash1}, {self.hash2})'

if __name__ == '__main__':
    s = "geeksforgeeks"

print("Hash")
mid = time.time()
for x in range(10000):
    hash = Hash(s)
end = time.time()
print(end-mid)  
```


Here we are using heap sort to 1M records and measuring the time taken to complete the task.

#### Results

| Bech mark     | JavaScript (Milli seconds)    | PyScript (Milli seconds) |
| :------------- | :-------------: | :--------: |
| `Polynomial hash 10k times.` |  54 | 223 |

