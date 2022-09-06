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
        // handle the error
        console.log(error)
    });
}

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
        // handle the error
        console.log(error)
    });
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