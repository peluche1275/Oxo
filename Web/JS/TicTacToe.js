class TicTacToe {

    constructor() {

        this.gridBoxes = document.getElementsByClassName("box");
        this.buttonRestart = document.getElementById("restart");
        this.location = document.location;

    }

    run() {

        this.playerTouchGridBoxes();

        this.restartGame();

    }

    playerTouchGridBoxes() {

        let self = this;

        for (let i = 0; i < 9; i++) {

            let boxSelected = self.gridBoxes.item(i);

            boxSelected.addEventListener("click", function () {
                self.drawTheSymbolinTheBox(boxSelected, "player");
            });

        }
    }

    drawTheSymbolinTheBox(box, who) {

        if (box.innerHTML == "") {
            if (who == "player") {
                box.innerHTML = "X"
            }
            else {
                box.innerHTML = "O"
            }
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

