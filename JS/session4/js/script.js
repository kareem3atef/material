var d = new Date()

console.log(d)
console.log(d.getFullYear())
console.log(d.getMonth()) // 0 : 11


// var month= ["January","February","March","April","May","June","July",
//             "August","September","October","November","December"];
var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

console.log(month[d.getMonth()])

console.log(d.getDate()) // 1 : 31

console.log(d.getDay()) // 0 : 6 

console.log(d.getHours())
console.log(d.getMinutes())
console.log(d.getSeconds())


switch (d.getMonth()) {
    case 0: console.log("Jan")
        break
    case 1: console.log("Feb")
        break
}
