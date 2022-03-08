var birthYear = 2010

var user = {
    firstName : "Mai",
    lastName : "ahmed",
    // address : "Maadi",
    birthYear : 1999,
    // function inside object
    age : function(currentYear){
        return currentYear - this.birthYear 
    },
    getFullName : function(){
        return this.firstName + " " + this.lastName
    },
    numbers : function(){
        return {
            phoneNumber : 2222222,
            mobileNumber : 111111111111
        }
    },
    address : function(){
        return ["nasr city" , "october"]
    }


}

user.nationality = "egyptian"
// user.address = "october"

// console.log(user.age(2022))
// console.log(user.getFullName())

// send object to function
var info = (userInfo)=>{
    console.log(userInfo.firstName)
    console.log(userInfo.getFullName())
}

info(user)


// return object from function
var personalInfo = ()=>{
    return user
}

// console.log(personalInfo().numbers().mobileNumber)
// console.log(personalInfo().address()[0])


var obj = {
    test : "html",
    test2 : "JS",
}

var arr = []

arr.push(obj)

arr.push({
    test : "html",
    test2 : "JS",
})

// console.log(arr)
// console.table(arr)


/////////////////////////////////////////////////////////////////

// string Methods (function)

var text = "    Lorem, ipsum dolor sit amet Lorem       "

// console.log(text.length)

// console.log(text[0])

for(var i = 0 ; i < text.length ; i++){
    // console.log(text[i])
} 


// console.log(text)
// console.log(text.trim())

var replaceValue = text.replace("Lorem" , "javascript")
// console.log(text.replace("Lorem" , "javascript"))
// console.log(text.replaceAll("Lorem" , "javascript"))

var weather = "sunny Day , Lorem, ipsum DOLOR sit"

// console.log(weather.startsWith("html"))
// console.log(weather.endsWith("sit"))
// console.log(weather.includes("Day"))
// console.log(weather.toLowerCase())
// console.log(weather.toUpperCase())


/////////////////////////////////////////////////////////////////

// Number Methods

var h = 5 / "html"

console.log(h) // NaN

var g = 3
console.log(isNaN(g))

// isNaN() = false ==> variable(number)

var k = -4

console.log(Math.abs(k))
// 4.2 
console.log(Math.round(4.9))
console.log(Math.floor(4.9))
console.log(Math.ceil(4.1))
console.log(Math.max(100 , 0 , 20 , -4 , 1000))
console.log(Math.min(100 , 0 , 20 , -4 , 1000))
console.log(Math.random()) // 0 : 1
console.log(Math.round(Math.random()*100))