// for(var i = 1 ; i <= 10 ; i++){
//     console.log(i)
//     if(i == 4) continue
//     else if (i == 8) break
// }

// console.log("javascript")



////////////////////////////////////

// Function

/*
function Name(){
    code ....
}

call()

*/

////////////////////////////////////////////
// function sumTwoNumbers(){
//     // console.log(4 + 5)
//     var num1 = 4 
//     var num2 = 10
//     var sum = num1 + num2
//     return sum
// }
// var s = sumTwoNumbers()
// console.log(s)
////////////////////////////////////////////////

// var firstName = "ahmed"

// function sum(){
//     console.log(firstName)
//     plus = 10 + 20
//     // console.log(plus)
// }

// sum()

// console.log(plus)


// if(true) {
//     console.log(plus)
// }
// else{
//     console.log("html")
// }


// function sum2(){
//     plus = 100 + 200
// }
// sum2()


// function sum3(){
//     plus = 50 + 20
// }
// sum3()
/////////////////////////////////////

var num1 = 4
var num2 = 5

var firstName = "ahmed"

// function sum(num1 , num2 , num3 = 12){
//     // console.log(firstName)
//     // console.log(num1) 
//     console.log("number 2 = " + num2)
//     if(num2 == undefined) console.log("please enter number 2")
//     return num1 + num2 + num3


// }


// console.log(sum(10 , 20 ))
// console.log(sum(30))
// console.log(sum(100 , 50 , 5 ))

// function prompt(message = "" , _default = "")


// function getFullName(){
//     var firstName = prompt("enter your First Name" )
//     var lastName = prompt("enter your Last Name")
//     return firstName + " " + lastName
// }

// console.log(getFullName())
// console.log(getFullName())
// console.log(getFullName())

///////////////////////////////////////////////////

//////////// function statment

// function info(){
//     return "ahmed"
// }

// var firstName = info()

////// function expression
// var info = function(){
//     return "ahmed"
// }
// console.log(info())

////// arrow function
// var info = (name)=>{
//     return name
// }
// info("tamer")
////////////////////////////////////////////////////

// var fName = "tamer"
// var age = 40
// var job = "engineer"
// var isMarried = true

// var userInfo = [ "tamer" , 40 , "engineer" , true ]


// userInfo[1] = 35 // update item
// userInfo[4] = "october" // set item
// userInfo[userInfo.length] = false

// console.log(userInfo)
// console.log(userInfo.length)


////////////////////////////////////////////////////////////////////////

///// Methods of Array


// var courses = ["html" , "css" , "bootstrap"]

// courses.push("node" , "javascript")
// courses.unshift(true , 0)

// courses.pop()
// courses.pop()

// courses.shift()
// courses.shift()


// console.log(courses)
///////////////////////////

// splice(startIndex , deletedCount , item/s)


// remove item/s
var names = ["zain", "marwa", "omar", "nada", "ahmed", "mai", "tamer", true, 10, false]

names.splice(3, 3)


//// add item/s

names.splice(1, 0, "mai", "mohamed", "hazem")


//// add / remove item/s

names.splice(0, 2, "ahmed")


/////////////////////////////////

console.log(names.includes(10))

if (!names.includes("zain")) {
    console.log("found")
    names.push("zain")
}
// else {
//     console.log("not Found")
//     names.push("zain")
// }

// console.log(names)


var ids = [0, 1, 2, 3, 4, 5]
var tracks = ["CCNA", "Web Design", "Web Develop"]

var arr = tracks.concat(ids, names)
// console.log(arr.toString())
// console.log(arr.join("--"))

// console.log(arr)
////////////////////////////////////
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])
// console.log(arr[5])
// console.log(arr[6])
// console.log(arr[7])
// console.log(arr[8])
// console.log(arr[9])
// console.log(arr[10])
// console.log(arr[11])
// console.log(arr[12])
// console.log(arr[13])
// console.log(arr[14])
// console.log(arr[15])
// console.log(arr[16])
// console.log(arr[17])
// console.log(arr[18])

// for(var i = 0 ; i < arr.length ; i++){
//     console.log(arr[i])
// }


//  ()=>{

// }

names.forEach((ele, ind) => {
    // console.log(ele)
    // console.log("index of " + ind + " = " + ele)
    // console.log(arr)

    // if(ele == "tamer") console.log("welcome tamer")
})
////////////////////////////

var numbers = [3, 10, 15, 1, 20, 0, 30, 25]
var find = numbers.find(item => item > 100)

var findInd = numbers.findIndex(ele => ele > 10)
var findInd = numbers.findIndex(ele => ele > 100)

var filter = numbers.filter(val => val > 10)
// console.log(numbers)
// console.log(findInd)
// console.log(filter)


/////////////////////////////////

// var fName = "tamer"
// var age = 40
// var job = "engineer"
// var isMarried = true

// var userInfo = [ "tamer" , 40 , "engineer" , true ]

var user = {
    firstName: "tamer",
    lastName: "ahmed",
    age: 35,
    isGraduated: true
}
console.log(user.firstName) // get propert
user.isGraduated = false // edit property
user.address = "october" // set property
console.log(user)

var user2 = {
    firstName: "zain",
    lastName: "ahmed",
    age: 18,
    isGraduated: false
}
var user3 = {
    firstName: "Mai",
    lastName: "ahmed",
    age: 18,
    isGraduated: false
}

// array of objects
var usersInfo = [
    {
        firstName: "tamer",
        lastName: "ahmed",
        age: 35,
        isGraduated: true
    },
    {
        firstName: "zain",
        lastName: "ahmed",
        age: 18,
        isGraduated: false
    },
    {
        firstName: "Mai",
        lastName: "ahmed",
        age: 18,
        isGraduated: false
    }
]

console.log(usersInfo)

// usersInfo.forEach((ele)=>{
//     console.log(ele)
// })

console.log(usersInfo[0].age)

var obj = usersInfo.find(val => val.age == 35)

console.log(obj)







