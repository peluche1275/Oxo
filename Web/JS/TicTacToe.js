class TicTacToe {

    constructor() {

        this.gridBoxes = document.getElementsByClassName("box");
        this.buttonRestart = document.getElementById("restart");
        this.location = document.location;

    }

    run() {

        this.touchGridBoxes();

        this.restartGame();

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

    restartGame() {

        let self = this;

        this.buttonRestart.addEventListener("click", function () {
            self.location.reload(true);
        });

    }
}

let Oxo = new TicTacToe;
Oxo.run();

