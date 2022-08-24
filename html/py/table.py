
import js
from js import document
import time
from js import console


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

def increaseAge(*args):
    start = time.time()
    myTable = document.getElementById('myTable')
    i=0
    for i in range(10000):
        cells = myTable.rows[i].cells
        cells[2].innerHTML = str(21)
    end = time.time()
    console.log(end-start)

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