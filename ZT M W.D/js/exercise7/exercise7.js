// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
// let user = 

// 2. Create an array which contains the object you have made above and name the array "database".
let database = [
    {
        userName: "junaid",
        password: "password"
    },
    {
        userName: "user2",
        password: "password2"
    },
    {
        userName: "user3",
        password: "password3"
    }
]
// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
    {
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
]

function signIn(name , pass) {
    let userFound = false;
    for (let data = 0; data < database.length; data++) {
        if (name === database[data].userName && pass === database[data].password) {
            userFound = true;
            console.log(newsfeed);
            break;
        }
    }
    if (!userFound){
        alert(`Sorry!, ${name} Wrong username or password`)
    }
}

let userName = prompt("Enter Your UserName")
let UserPassword = prompt("Enter Your Password")
signIn(userName,UserPassword)