///////////////////////////////////////////////////////////
// var form = document.getElementById("myForm")
// form.addEventListener("submit" , formFunction)

// function formFunction(){

// }

//////////////////////////////////////////////////////

var form = document.getElementById("myForm")
var taskContainer = document.querySelector("#taskContainer")
var tasks = []

//// form submit
form.addEventListener("submit", function (e) {
    e.preventDefault()
    console.log(e.target.elements.taskName.value)
    console.log(e.target.elements.taskType.value)
    console.log("form is submitting.....")

    addTask(e.target.elements.taskName.value, e.target.elements.taskType.value)
    drawingTasks()
})

////// add task Function
function addTask(name, type) {
    var task = {
        taskName: name,
        taskType: type ,
        status : false
    }
    tasks.push(task)
    console.table(tasks)
   
}


////////// drawing function
function drawingTasks(){
    taskContainer.textContent = ""
    tasks.forEach((item , i)=>{
       var div = document.createElement("div");
       var h2 = document.createElement("h2") 
       var h3 = document.createElement("h3") 
       var completeBtn = document.createElement("button") 
       var removeBtn = document.createElement("button") ;
       (item.status) ? div.classList.add("alert" , "alert-success") : div.classList.add("alert" , "alert-secondary")
        completeBtn.setAttribute("class" , "btn btn-success me-3")
        removeBtn.setAttribute("class" , "btn btn-danger")
        h2.innerText = item.taskName
        h3.textContent = item.taskType
        completeBtn.innerText = "Completed Task";
        removeBtn.innerText = "Remove Task"
        div.append(h2)
        div.append(h3)
        div.append(completeBtn)
        div.append(removeBtn)
        taskContainer.append(div)

        completeBtn.addEventListener("click" , function(){
        
            console.log(i)
            editTask(i)
        })
        removeBtn.addEventListener("click" , function(){
            deleteTask(i)
        })

    })
}


///// edit task function
function editTask(ind){
    tasks[ind].status = true
    console.table(tasks)
    drawingTasks()
}

//// delete task function
function deleteTask(ind){
    tasks.splice(ind , 1)
    console.table(tasks)
    drawingTasks()
}





