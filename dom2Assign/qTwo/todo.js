 function add(){
    if(document.querySelector('#addTask input').value.length == 0){
        alert("Enter a Task..")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#addTask input').value}
                </span>
                <button class="delete">
                \u00D7
                </button>
            </div>
        `;
        document.querySelector('#addTask input').value ="";
    
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
    
}

