// console.log("html")


var address = 'nasr city'
var age = 10
// console.log(age)

var isGraduated = true

// boolean ==> true / false

/*
comment ==> multi line

*/

var firstName = "zain"
var lastName = "tamer"
var fullName = firstName + " " + lastName

// console.log(fullName)

var h // undefined

// console.log(h)

var t = null

// console.log(t)

///////////////////////////////////

// var p = prompt("enter your Name")
// console.log(p)

/////////////////////////////////////


// -- Mathematical Operators ==> (+ - / * ** % ++ --)  

var a = 4
var b = 5

var sum = a + b
var subtract = b - a

var mulip = a * b
// console.log(sum)
// console.log(subtract)
// console.log(mulip)

//// ++ increment 
var k = 5
// console.log(++k)
// console.log(k++)
// console.log(k++)
// console.log(k++)
// console.log(k)


//// -- decrement

var t = 10
// console.log(--t)
// console.log(t--)
// console.log(t)


//  Assignment Operators (+= , -= , /=  , *=  , **= , %=) 

var r = 5
r = r + 3 // 8
r += 3 // 11
// console.log(r)

var userName = "ahmed";
// console.log(UserName)
// console.log(typeof(r)) ;
// console.log(typeof userName) ;



/////  Comparison Operators ==> (> , < , >= , <= , == , === , != , !==) ==> return boolean type (true / false)

var x = 4
var y = 10
var q = 10

// console.log(x > y)
// console.log(x < y)
// console.log(y >= q)


var g = "10"

// console.log(g == 10)   // value
// console.log(g === 10) // value - datatype

// console.log(typeof g) // string

// console.log(typeof g == "number")


var l = 20
// console.log(l == 20)
// console.log(l != 20) // value


var s = 20
// console.log(s === "20")
// console.log(s !== "20") // value - datatype


/////////////////////////////////////
// -- logical ==> && || !


var h = 10
var r = 30

// console.log(h < r)
// console.log(h == 10)

// console.log(h < r && h == 20 && typeof h == "number")

// && ==> true , true  ..... = true
// && ==> true , true , true , false = false


// console.log(h < 5 || h == 20 || typeof h == "number")

// || ==> false , false , false , true = true
// || ==> false , false , false = false


var age = 15

// console.log(age)
// console.log(!age)

var t = 100
var f = false

var f
var n = null
// console.log(!n)

var h = 3
var k = "html"

var m = h / k // NaN
// console.log(!m)

////////////// Ternary operator

// (condition) ? true  : false

// var p = prompt("enter your Name");
// var result // undefined
// (p == "ahmed") ? result = "correct" : result = "wrong"
// console.log(result)

// (p) ? res = "correct" : res = "wrong" 

// console.log(res)


var num1 = 10
var num2 = 20;

// (num1 == 10 && num2 <= 20) ? res = "correct" : res = "wrong"

// console.log(res)


////////////////////////////////////////////

// if / else statment

/*
if(condition) 
    true code .....

else 
    false code .....    

*/

// var job = prompt("enter your Job")



// if (job == null || job == "") {
//     console.log("test")
// }
// else {
//     if (job == "doctor" || job == "nurse") {
//         console.log("doctor || nurse")
//         console.log("correct")
//     }
//     else if (job == "developer" && typeof job == "string") {
//         console.log("developer")
//     }
//     else if (job == "engineer") {
//         console.log("eng")
//     }
//     else {
//         console.log("enter a valid job")
//     }
// }




// var p = prompt("enter your grade") 
// if(p == null || p == "") console.log("enter a valid Degree")
// else if (p >= 90 ) console.log("A")
// else if (p <= 90 && p >= 77 ) console.log("B")
// else if(p <= 77 && p >= 60) console.log("c")
// else if(p <=60 && p >= 50)console.log("D")
// else if (p < 50)  console.log("F")

/////////////////////// switch case statment

/*
variable
switch(condition){
    case .. : code ..
    case .. : code ..
    case .. : code ..
    case .. : code ..
    case .. : code ..
    default : code ...
}


*/

// var job = prompt("enter your Job")
// // var job = true

// switch(job){
//     case "doctor" :
//     case "nurse":    
//         console.log("doctor || nurse")
//         console.log("correct")
//         console.log("javascript")
//         break
//     case "developer" :
//         console.log("developer")   
//         break
//     case "engineer" :
//         console.log("eng")     
//         break
//     case true :
//         console.log("boolean type")  
//         break 
//     case 30 :
//         console.log("30")
//         break     
//     default : console.log("enter a valid job")    
// }

/////////////////////////////////////////////////////

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// while looping 

/*
start
 while(condition){
     code ....



     start++;
 }
 */

//  var i = 1 

//  while(i <= 30){
//     console.log(i)
//     // console.log("html") 
    
//     i++;
//  }


 /// for 

 /* 
 for(start ; condition ; increment){
     code ...
 }
*/
// for( i = 1 ; i < 10 ; i++){
//     console.log(i)
// }




