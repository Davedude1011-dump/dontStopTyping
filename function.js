var textArea = document.querySelector(".typing-area");
var lastTypedTime = new Date();
var functionRunning = false;

textArea.addEventListener("keydown", function() {
    lastTypedTime = new Date();
    functionRunning = false;
    textArea.style.borderColor = "green"
});

setInterval(function() {
        var currentTime = new Date();
        if (currentTime - lastTypedTime > 400 && !functionRunning) {
            functionRunning = true;
            console.log("User has not typed for a second");
            // call your function here
            functionToRun();
        }
}, 400);

function functionToRun() {
    if (textArea.value != "" || textArea.value != "") {
        if (functionRunning) {
            textArea.value = textArea.value.substring(0, textArea.value.length - 1);
            console.log("DELETE")
            setTimeout(functionToRun, 30);
        }
        textArea.style.borderColor = "red"
    }
    else {
        textArea.style.borderColor = document.body.style.borderColor
    }
}

// dark mode

const darkModeBtn = document.querySelector("#dark-mode-btn");

darkModeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    darkModeBtn.classList.toggle("clicked")
    if(document.body.classList.contains("dark-mode")){
        darkModeBtn.innerText = "Light Mode";
    } else {
        darkModeBtn.innerText = "Dark Mode";
    }
});

// background decor
window.onload = function() {
    let circles = document.getElementsByClassName('bg-circles');
    
    for(let i = 0; i < circles.length; i++) {
      let top = Math.floor(Math.random() * (100 - 40)) + 'vh';
      let left = Math.floor(Math.random() * (100 - 40)) + 'vw';
      circles[i].style.setProperty('--top', top);
      circles[i].style.setProperty('--left', left);
    }
}