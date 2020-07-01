class Oxo {

    constructor() {
        this.case = document.getElementsByClassName("box");
    }

    touchACase() {
        let self = this;
        this.case.addEventListener("click", function () {
            self.case.innerHTML = "X";
        });
    }
}

let TTT = new Oxo;
TTT.touchACase();

