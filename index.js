//Mock database
const userDatabase = {
    "pope": {
        firstName: "Igantius",
        lastName: "Obiorah",
        email: "iobiorah23@gmail.com",
        active: true,
        password: "whoispope23"
    }
}

function displayUserDetails() {
    // Enter username
    let username = prompt("Enter Username");

    while (validateUsername(username) == false) {
        username = prompt("Try Again username should be between 4-10 characters");
    }

    if (username == null) {
        return 
    }

    //Enter password
    let password = prompt("Enter Password");

    while (validatePassword(password) == false) {
        password = prompt("Try again password should be more than six characters");
    }

    if (password == null) {
        return
    }
    
    //Confirm password
    let confirmPassword = prompt("Confirm password");

    while (confirmPassword !== password) {
        confirmPassword = prompt("Confirm password again");
    }

    if (confirmPassword == null) {
        return  
    }

    //Check if userdatabase contains password
    const user = userDatabase[username]

    if (user == undefined) {
        alert("user not found, please register");
        return
    }
    // console.log(user)

    //Display user  
    alert(`
    user found with the following details:
    Firstname: ${user.firstName }
    Lastname: ${user.lastName }
    Email: ${user.email }
    Active: ${user.active}
    `)
    
    // console.log(username + " --username  " + password + " --password");
}

displayUserDetails();
alert("Goodbye");

//Function to validate username
function validateUsername(username) {
    if (username == null) {
        return (true);
    }else if (username.length > 10) {
        return (false);
    }else if (username.length < 4) {
        return (false);
    } else {
        return (true);
    }
}

//Function to validate password
function validatePassword(password) {
    if (password == null) {
        return (true);
    }else if (password.length < 6) {
        return (false);
    } else {
        return (true);
    }
}

//BUGs
//User can't cancel from confirm password
//username and password accepts space as character
//Any password can display user details sofar it passes the basic validation

//tried arrow function code but it's not working don't know why yet
// validateUsername(() => {
//     if (username.length < 10) {
//         return (false);
//     } else {
//         return (true);
//     }

// })

// console.log(validateUsername(username))

//If you can show me a better way to refactor my codes and remove existing bugs
//please contact me on twitter @whoispope_