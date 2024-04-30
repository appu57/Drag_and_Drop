let lists = document.getElementsByClassName("list");
let inProgress = document.getElementById("in-progress");
let completed = document.getElementById("completed");
let notStarted = document.getElementById("not-started");
let selected = null; 

for (let i = 0; i < lists.length; i++) {
    lists[i].addEventListener("dragstart", function (event) {
        selected = event.target;
    });

    inProgress.addEventListener("dragover", function (event) {
        event.preventDefault();
    });

    inProgress.addEventListener("drop", function (event) {
        if (selected !== null) {
            inProgress.appendChild(selected);
            selected = null;
        }
    });

    completed.addEventListener("dragover", function (event) {
        event.preventDefault();
    });

    completed.addEventListener("drop", function (event) {
        if (selected !== null) {
            completed.appendChild(selected);
            selected = null;
        }
    });


}
