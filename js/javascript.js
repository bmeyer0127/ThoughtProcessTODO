
/*
 TODO:
*/

const taskList = [];
const uncompletedTasks = [];
const removeButtons = [];
// gather info from text box after button click

function addTasks() {
    // gather info brom taskBox
    let taskSubmission = document.getElementById("taskBox").value;
    let taskBox = document.getElementById("taskBox");

    // alerts if box is empty
    if (taskSubmission.trim() == '') {
        alert('Empty String');
        return;
    }

    //Splits up multiple entries separarated by "\n"
    let lastTasksSubmittedParsed = taskSubmission.split('\n');

    // Loop to run through entries separated by "\n" and push each into taskList[]
    for(let currentSub = 0; currentSub < lastTasksSubmittedParsed.length; currentSub++) {
        taskList.push(lastTasksSubmittedParsed[currentSub]);
        uncompletedTasks.push(lastTasksSubmittedParsed[currentSub]);
    }

    // Creates list item and coresponding remove button
    for(let length = 0; length < taskList.length; length++) {
        let el = document.createElement("li");
        let rm = document.createElement("button");

        el.classList.add("task");
        rm.classList.add("remove", "button");

        // Initial assigning of IDs to tasks and their coresponding remove buttons
        el.id = "element" + length;
        rm.id = "remove" + length;

        // Adds each remove button to a created list.
        // removeButtons[] and uncompletedTasks[] are what connects the rmBtn to the coresponding task
        removeButtons.push(rm);

        // Listener event for the remove buttons
        rm.addEventListener("click", (event) => {
                    
            let index = event.target.id;
            index = index.slice(6);
    
            console.log(index);
    
            let el = document.getElementById("element" + index);
            let rm = document.getElementById("remove" + index);
    
            // Removes task and coresponding remove button from DOM
            el.remove();
            rm.remove();

            // Removes task from uncompletedTasks
            uncompletedTasks.splice(index, 1);
    
            // Reassigning IDs to tasks and rmBtns on each removal
            let elements = document.getElementsByClassName("task");
            let rmBtns = document.getElementsByClassName("remove");
            for (let length = 0; length < uncompletedTasks.length; length++) {
                elements[length].id = "element" + length;
                rmBtns[length].id = "remove" + length;
            }
    
            
        })

        rm.innerHTML = "X";
        el.innerHTML = taskList[length];

        document.getElementById("taskListPrinted").appendChild(el);
        document.getElementById("taskListPrinted").appendChild(rm);
    }

    // Deletes content of text input box and taskList[]
    while (taskList.length > 0) {
        taskList.pop();
    }
    taskBox.value = '';

    // Reassigning IDs tasks and rmBtns on each entry
    let elements = document.getElementsByClassName("task");
    let rmBtns = document.getElementsByClassName("remove");
        for (let length = 0; length < uncompletedTasks.length; length++) {
            elements[length].id = "element" + length;
            rmBtns[length].id = "remove" + length;
        }

    
}

// Function to randomly pick a task in uncompletedTasks[]

function spinTheWheel() {
    let randomTask = document.getElementById("randomTask");
    let fromList = uncompletedTasks[Math.floor(Math.random() * uncompletedTasks.length)];
    if (uncompletedTasks.length == 0) {
        alert("oops, the task list is empty...");
        return;
    }
    randomTask.innerHTML = fromList;
    console.log(uncompletedTasks);
}