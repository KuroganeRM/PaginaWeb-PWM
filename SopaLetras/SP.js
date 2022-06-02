let btnReestablecer = document.getElementById('btnReestablecer');
let btnResolver = document.getElementById('btnResolver');
let answers = document.querySelectorAll(".answer");

function reboot() {
    if (btnReestablecer.value = "Reestablecer") {
        for (var i = 0; i < answers.length; i++) {
            answers[i].style.backgroundColor = "whitesmoke";
        }
        console.log(btnReestablecer);
    }
}

function solver() {
    if (btnResolver.value = "Resolver") {
        for (var i = 0; i < answers.length; i++) {
            answers[i].style.backgroundColor = "#fda500";
        }
        console.log(btnResolver);
    }

}