function showToast(message) {
  let toast = document.getElementById("toast");
  toast.innerText = message;
  toast.className = "show";

  setTimeout(function(){
    toast.className = toast.className.replace("show", "");
  }, 3000); // Hide after 3 seconds
}


document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        showToast("⚠️ Please Enter a Task");
    }
    else{
        // Add a task into the list
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <img src="trash-can-regular-full.svg" />
            </button>
            </div>
        `;

        // Deleting a task from the list
        var current_task = document.querySelectorAll(".delete");
        for(var i=0; i<current_task.length; i++){
            current_task[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        // Crossing out the completed task
        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        // Clear input after adding
        document.querySelector("#newtask input").value = "";
    }
}
