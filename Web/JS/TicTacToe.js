class TicTacToe {

    constructor() {

        this.gridBoxes = document.getElementsByClassName("box");
        this.buttonRestart = document.getElementById("restart");
        this.location = document.location;
        this.turn = "1";

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
                boxSelected.idIndex = i;
                self.drawTheSymbolInTheBox(boxSelected, "player");

            });

        }
    }

    drawTheSymbolInTheBox(box, whoDraw) {

        if (box.innerHTML == "") {

            if (whoDraw == "player") {
                box.innerHTML = "X"
                console.log("Le joueur à jouer !")
                this.logicComputer(box.idIndex);
            }

            else {
                box.innerHTML = "O"
                console.log("L'ordinateur à jouer !")
            }

        }

    }

    logicComputer(boxId) {
        let turn = "this.turn" + this.turn + "(" + boxId + ")";
        eval(turn);
        this.turn++;
    }

    checkNumberInArray(array, number) {
        if (array.find(element => element == number)) {
            return true
        }
    }

    turn1(numberOfTheBox) {    
        if (this.checkNumberInArray([0, 2, 6, 8], numberOfTheBox) || numberOfTheBox == 0) {
            this.gridBoxes.item(4).innerHTML = "O";

        } else if (numberOfTheBox == 1) {

            this.gridBoxes.item(2).innerHTML = "O";

        } else if (numberOfTheBox == 3) {

            this.gridBoxes.item(0).innerHTML = "O";

        } else if (numberOfTheBox == 5) {

            this.gridBoxes.item(8).innerHTML = "O";

        }else if (this.checkNumberInArray([7,4], numberOfTheBox)) {

            this.gridBoxes.item(6).innerHTML = "O";
        }
    }

    turn2() {
        console.log("Tour 2 de l'ordinateur")
    }

    turn3() {
        console.log("Tour 3 de l'ordinateur")
    }

    turn4() {
        console.log("Tour 4 de l'ordinateur")
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

