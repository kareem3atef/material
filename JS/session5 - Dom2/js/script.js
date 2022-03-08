// var myInput = document.getElementById("myInput")
// console.log(myInput.type)
// console.log(myInput.getAttribute("type"))
// myInput.setAttribute("name" , "username")
// myInput.setAttribute("placeholder" , "enter your name")

// var pass = document.querySelector("#passwordInput")
// pass.toggleAttribute("required")

// myInput.toggleAttribute("required")

////////////////////////////////////////////////////////////

var customDiv = document.querySelector(".custom-div")

// customDiv.innerText = "lorem text "

// customDiv.innerHTML = "<h1>Lorem </h1>"

//////////////// CreateElement()

var createdH1 = document.createElement("h1") // create h1 tag
createdH1.innerText = "HTML CSS JAVASCRIPT"

var h2 = document.createElement("h2")
h2.textContent = "web design"

customDiv.append(createdH1)
customDiv.prepend(h2)








