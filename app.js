let todo = [];
let req = prompt("please enter your request");

while(true){
    if(req == "quit"){
        console.log("quiting app");
        break;
    }
    if(req == "list"){
        console.log("----------");
        for(task of todo){
            console.log(todo);
        }
        console.log("----------");
    }else if(req == "add") {
        let task = prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }else if(req == "delete"){

        let idx = prompt("please enter the task index");
        todo.splice(idx, 1);
    }

    req = prompt("please enter your request")
}