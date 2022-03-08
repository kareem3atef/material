setTimeout(()=>{
    console.log("Js")
} , 8000)



var counter = document.getElementById("counter")
var i = 0
var set = setInterval(()=>{
  
  console.log(i)
  if(i == 800){
    clearInterval(set)
  }
  else{
      i+=100
    counter.innerText = i
  }
} , 10)

// for(var ind = 0 ; ind <= 20 ; ind++){
//     setInterval(()=>{
//         counter.innerText = ind
//     } , 500)
// }


///////////////////////////////////////////////////////////////////


//  localStorage.setItem("firstName" , "Nouran")
//  localStorage.setItem("ID" , "1")
//  localStorage.setItem("Address" , "Nasr city")

// localStorage.removeItem("Address")

// console.log(localStorage.getItem("firstName"))
// localStorage.setItem("ID" , "2222222")


// sessionStorage.setItem("Job" , "developer")
// sessionStorage.setItem("age" , "15")
// sessionStorage.setItem("name" , "ahmed")

// sessionStorage.removeItem("Job")

// sessionStorage.setItem("age" , "30")

// var userName = document.getElementById("userName")
// var p = prompt("enter your Name")

// localStorage.setItem("name" , p)

// userName.innerText = localStorage.getItem("name") 

// console.log(localStorage.getItem("age"))


// var users = [
//     {name:"tamer" , ID : 1 , balance:50000} ,
//     {name:"zain" , ID : 2 , balance:50000} ,
//     {name:"marwa" , ID : 3 , balance:50000} ,
// ]


// console.log(JSON.stringify(users))


// localStorage.setItem("usersArray" , JSON.stringify(users))

// var arr = localStorage.getItem("usersArray")
// console.log(JSON.parse(arr))


////////////////////////////////////////////////////////////////////////////

///// RelationShip Of Elements

var ul = document.querySelector("#myUl")

var firstLi = ul.firstElementChild
console.log(firstLi)
firstLi.innerText = "Bla bla blaaaaa"
firstLi.style.color = "red"

var lastLi = ul.lastElementChild
lastLi.style.color = "blue"
///////////////////////

var li = document.getElementById("myLi")

var nextli = li.nextElementSibling
nextli.style.fontSize = "40px" 
nextli.style.color = "green" 

var prevLi = li.previousElementSibling
prevLi.style.background = "lightgray"


var parent = li.parentElement

parent.style.border = "2px solid red"



