function addRows() {
   // clearTable();
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