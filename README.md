# PyScript Benchmark
#### A battle between PyScript and JavaScript

## 1. Dom manipulation

In this Benchark We are going to do some UI manipulation tasks using both PyScript and JavaScript and  measure the performance of both.

### 1. Adding 10000 rows to table.

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


