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

        this.test();

    }


    test(){
        var arr = new Array(3);
            for (var i = 0; i < 3; i++) {
                arr[i] = new Array(3);
                for (var j = 0; j < 3; j++)
                    arr[i][j] = (i * 3) + j ;
        }
        console.log(arr)
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

    checkWinner() {

        let possiblities = [0, 1, 2, 3, 4, 5, 6, 7, 8, 0, 3, 6, 1, 4, 7, 2, 5, 8, 0, 4, 8, 2, 4, 6];

        for (var i = 0; i < 24; i += 3) {

            if (this.gridBoxes.item(possiblities[i]).innerHTML == 'X' && this.gridBoxes.item(possiblities[i + 1]).innerHTML == 'X' && this.gridBoxes.item(possiblities[i + 2]).innerHTML == 'X') {
                console.log("YES !")
            }

            if (this.gridBoxes.item(possiblities[i]).innerHTML == 'O' && this.gridBoxes.item(possiblities[i + 1]).innerHTML == 'O' && this.gridBoxes.item(possiblities[i + 2]).innerHTML == 'O') {
                console.log("NOPE !")
            }

        }
    }

    drawTheSymbolInTheBox(box, whoDraw) {

        if (box.innerHTML == "") {

            if (whoDraw == "player") {

                box.innerHTML = "X"
                console.log("Le joueur à jouer !")
                this.checkWinner()
                this.logicComputer(box.idIndex);

            }

            else {

                box.innerHTML = "O"
                console.log("L'ordinateur à jouer !")
                this.checkWinner()
                console.log("A TOI DE JOUER !")

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

            this.drawTheSymbolInTheBox(this.gridBoxes.item(4), "computer");


        } else if (numberOfTheBox == 1) {

            this.drawTheSymbolInTheBox(this.gridBoxes.item(2), "computer");


        } else if (numberOfTheBox == 3) {

            this.drawTheSymbolInTheBox(this.gridBoxes.item(0), "computer");


        } else if (numberOfTheBox == 5) {

            this.drawTheSymbolInTheBox(this.gridBoxes.item(8), "computer");


        } else if (this.checkNumberInArray([7, 4], numberOfTheBox)) {

            this.drawTheSymbolInTheBox(this.gridBoxes.item(6), "computer");

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

    turn5() {
        console.log("DRAW")

    }

    restartGame() {

        let self = this;

        this.buttonRestart.addEventListener("click", function () {
            self.location.reload(true);
        });

    }
}

let oxo = new TicTacToe;
oxo.run();

