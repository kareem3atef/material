// var h1 = document.getElementById("heading_id")

// h1.innerText = "Javascript"

// console.log(h1.innerText )

// var textClass = document.getElementsByClassName("text_class")

// console.log(textClass)

// // textClass[0].innerText = "Bootstrap"

// for(var i = 0 ; i < textClass.length ; i++){
//     textClass[i].innerText = "bootstrap"
// }

// console.log(document.getElementsByClassName("ghg"))


// console.log(document.getElementsByTagName("h2"))

// var a = document.querySelector("#text_id #first_a")
// a.innerText = "Web Develop"
// // console.log(a)

// var aTags = document.querySelectorAll("a")
// console.log(aTags)

// var customH1 = document.querySelectorAll(".custom_text")

// // console.log(customH1)




// var h1 = document.getElementById("heading_id")

// h1.style.color = "red"
// h1.style.background = "lightgray"
// h1.style.border = "3px solid"
// h1.style.borderRadius = "10px"
// h1.style.width = "50%"



// var heading_h1 = document.querySelector("#h1_id")
// // console.log(heading_h1)

// // custom_style

// // heading_h1.className = "custom_text custom_style"
// heading_h1.classList.add("custom_style" , "new_class")
// heading_h1.classList.remove("blabla")

// var arr = document.getElementsByClassName("custom_text")

// for(var i = 0 ; i < arr.length ; i++){
//     arr[i].classList.add("arr_class")
// }


// // console.log(document.images)
// // console.log(document.title)
// document.title = "session 4 Dom 1"
// // console.log(document.links)
// // console.log(document.scripts)
// // console.log(document.forms)





////////////////////////////////////////////////////////////////////////////////////////


var img = document.getElementById("img_id")



function changeImage(item){
    console.log(img.src)
    console.log(img.width)
    console.log(img.height)
    console.log(img.id);

    (img.src == "file:///C:/Users/Nouran%20Fayez/Desktop/web-design-G15/JS/session4%20-Dom1/images/1.jpeg") ?
        img.src = "images/2.jpg" :
        img.src = "images/1.jpeg"  
        
   console.log(item)     
}


var hoverDiv = document.querySelector("#hover-div")


function changeDiv(){
    hoverDiv.style.background = "lightgray"
}
function changeDiv2(){
    hoverDiv.style.background = "white"
}

function changeDivBgColor(type , element){
    // console.log(element);
    (type == "mouseenter") ? element.style.background = "lightgray" :  element.style.background = "white"
}



// var myInput = document.getElementById("input_id")

// myInput.addEventListener("input" , function(){
//     // console.log("user is typing...")
//     console.log(myInput.value)
// })

// myInput.addEventListener("change" , function(){
//     // console.log("javascript")
//     // console.log("input value = "+ myInput.value)
// })

// var inputName = document.getElementById("input_name_id")

// inputName.addEventListener("input" , function(){
//     console.log(inputName.value)
// })



// var myForm = document.querySelector("#form_id")

// myForm.addEventListener("change" , function(e){
//     console.log(e.target.value)
//     console.log("js")
// })


////////////////// scroll on Element 
var scrollDiv = document.querySelector(".scroll-div")

scrollDiv.addEventListener("scroll" , function(e){
    // console.log(e.target.scrollTop)
    console.log(scrollDiv.scrollTop)
    if(scrollDiv.scrollTop > 150) scrollDiv.style.background = "yellow"
    else scrollDiv.style.background = "lightblue"

})


////////////////// scroll on Window

var topBtn = document.getElementById("topBtn")
var counter = document.getElementById("counter")
window.addEventListener("scroll" , function(){
    console.log("window is scrolling")
    if(document.documentElement.scrollTop > 300) 
        topBtn.style.display= "block"
    else topBtn.style.display="none"    


})







