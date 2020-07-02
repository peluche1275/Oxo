class TicTacToe {

    constructor() {

        this.gridBoxes = document.getElementsByClassName("box");

    }

    touchGridBoxes() {

        let self = this;

        for (let i = 0; i < 9; i++) {

            let boxSelected = self.gridBoxes.item(i);
            
            boxSelected.addEventListener("click", function () {
                boxSelected.innerHTML = "X";
            });

        }
    }
}

let Oxo = new TicTacToe;
Oxo.touchGridBoxes();

