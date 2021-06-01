//selectors
const input=document.querySelector(".input");
const button=document.querySelector(".button");
const list=document.querySelector(".list");
const option=document.querySelector(".filter-todo");
//event listeners
button.addEventListener("click",addToDo);
list.addEventListener("click",deleteCheck);
option.addEventListener("click",filterToDo);
//functions
function addToDo(e){
    //preventing default for the button i-e prevent submitting
    e.preventDefault();
    //now creating div with the class todo
    const toDoDiv=document.createElement("div");
    toDoDiv.classList.add("todo");
    //creating li element
    const newToDo=document.createElement("li");
    newToDo.innerText=input.value;
    newToDo.classList.add('todo-item');
    //now to stick this li element inside div element 
    toDoDiv.appendChild(newToDo);
    //creating check button
    const completeButton=document.createElement("button");
    completeButton.innerHTML='<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    toDoDiv.appendChild(completeButton);
    //creating Delete button
    const deleteButton=document.createElement("button");
    deleteButton.innerHTML='<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    toDoDiv.appendChild(deleteButton);
    //now appending this div created in js to the div in html
    //i-e to the list
    list.appendChild(toDoDiv);
    //clearing input value
    input.value="";
}
function deleteCheck(e){
    const item=e.target;
    if(item.classList[0]=="delete-btn"){
        const i=item.parentElement;
        i.classList.add("addinganimation");
        //now to remove the element after transition is finsihed
        i.addEventListener("transitionend",function(){
            i.remove();
        });
        //adding animation is for adding this class in css for animations
    }
    if(item.classList[0]=="complete-btn"){
        const i=item.parentElement;
        i.classList.toggle("completed");
    }
}
function filterToDo(e){
    const todos=list.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display="flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display="flex";
                }else{
                    todo.style.display="none";
                }
                break;
            case "uncompleted":
                if(todo.classList.contains("uncompleted")){
                    todo.style.display="flex";
                }else{
                    todo.style.display="none";
                }
                break;
        }
        
    });
}