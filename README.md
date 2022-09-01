# PyScript Benchmark

### A battle between PyScript and JavaScript

## 1. Dom manipulation

In this Benchark We are going to do some UI manipulation tasks using both PyScript and JavaScript and  measure the performance of both.

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


Here we are adding 10k rows to a table and measurin the taken to complete the task.


