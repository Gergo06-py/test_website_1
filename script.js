var optionsCanBeOpened = true;

function moreOptions() {
    var options = document.getElementById("options");
    var tasks = document.getElementById("tasks");

    if (optionsCanBeOpened === true) {
        options.style = "background-color: cadetblue; border: solid 10px cadetblue;";

        var paragraph = document.createElement("p");
        var input = document.createElement("input");

        paragraph.style = "color: aliceblue;";
        paragraph.innerHTML = "Set a deadline:";
        paragraph.id = "options-p";

        input.type = "date";
        input.id = "options-input";

        options.appendChild(paragraph);
        options.appendChild(input);
    } else {
        options.style = "border: hidden;";

        var paragraph = document.getElementById("options-p");
        var input = document.getElementById("options-input");
        
        options.removeChild(paragraph);
        options.removeChild(input);
    }
    optionsCanBeOpened = !optionsCanBeOpened;
}

function createTask() {
    tasks.style = "border: solid 10px lightcyan;";

    var paragraph = document.createElement("p");
    paragraph.innerHTML = document.getElementById("task").value;
    tasks.appendChild(paragraph);

    document.getElementById("task").value = "";
}