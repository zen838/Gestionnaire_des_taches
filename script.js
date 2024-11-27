let form = document.getElementById("form")

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let taskvalue = document.getElementById("input"/*"task-input"*/).value;
    let li = document.createElement("li");
    li.textContent = taskvalue;
    let ul = document.getElementById("liste"/*"task-list"*/).appendChild(li);
    input.value='';
    // btn delete
    let btn_delete = document.createElement("button");
    btn_delete.textContent = "Supprimer";
      
    btn_delete.addEventListener('click', function() {
        li.remove();
    });
    li.appendChild(btn_delete);
    // btn modif
    let btn_modif = document.createElement("button");
    btn_modif.textContent = "Modifier";
    li.appendChild(btn_modif);
    
    btn_modif.addEventListener('click', function(){
        let input = document.createElement("input");
        input.setAttribute("type", "text");
        li.appendChild(input);
        btn_modif.remove();
        
        // btn Sauvegarder
        let btn_save = document.createElement("button");
        btn_save.textContent = "Sauvegarder";
        li.appendChild(btn_save);
        btn_save.addEventListener('click', function(){
           li.firstChild.textContent = input.value;
           btn_save.remove();
           input.remove();
           li.appendChild(btn_modif);  
        });
    });
});

