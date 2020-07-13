class TicTacToe {

    constructor() {

        this.gridBoxes = document.getElementsByClassName("box");
        this.buttonRestart = document.getElementById("restart");
        this.location = document.location;
        this.turn = "1";
        this.possiblities = [0, 1, 2, 3, 4, 5, 6, 7, 8, 0, 3, 6, 1, 4, 7, 2, 5, 8, 0, 4, 8, 2, 4, 6];

    }

    run() {

        this.playerTouchGridBoxes();

        this.restartGame();

    }

    getRandomInteger() {

        return Math.floor(Math.random() * Math.floor(9));

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


        for (let i = 0; i < 24; i += 3) {

            if (this.gridBoxes.item(this.possiblities[i]).innerHTML == 'X' &&
                this.gridBoxes.item(this.possiblities[i + 1]).innerHTML == 'X' &&
                this.gridBoxes.item(this.possiblities[i + 2]).innerHTML == 'X') {
                console.log("YES !")
            }

            if (this.gridBoxes.item(this.possiblities[i]).innerHTML == 'O' &&
                this.gridBoxes.item(this.possiblities[i + 1]).innerHTML == 'O' &&
                this.gridBoxes.item(this.possiblities[i + 2]).innerHTML == 'O') {
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
                this.logicComputer();
                
            }

            else {

                box.innerHTML = "O"
                console.log("L'ordinateur à jouer !")
                this.checkWinner()
                console.log("A TOI DE JOUER !")

            }

        }

    }


    logicComputer() {
        let CompleteARow = "O"
        let BreakPlayerRow = "X"

        
        this.completeRow(CompleteARow);
        this.completeRow(BreakPlayerRow);
        this.randomChoice();
    }

    completeRow(symbol) {

        for (let i = 0; i < 24; i += 3) {

            for (let j = 0; j < 3; j++) {

                for (let k = 0; k < 3; k++) {
                    
                    if (j != k &&
                        this.gridBoxes.item(this.possiblities[i + j]).innerHTML == symbol &&
                        this.gridBoxes.item(this.possiblities[i + k]).innerHTML == symbol) {

                        for (let l = 0; l < 3; l++) {

                            if (l != j && l != k &&
                                this.gridBoxes.item(this.possiblities[i + l]).innerHTML == '') {

                                this.gridBoxes.item(this.possiblities[i + l]).innerHTML = 'O';
                                return true;

                            }
                        }

                    } else {
                        console.log('nope!')
                        return false;
                        
                        

                    }
                }
            }
        }
    }

    randomChoice() {

        let uinput = "0";

        while (uinput == '0') {

            let emptyBox = undefined;
            for (let i = 0; i < 9; i++) {
                if (this.gridBoxes.item(i).innerHTML == '') {
                    emptyBox = 1;
                    console.log('je trouve des cases vides')
                }
            }

            if (emptyBox == 1) {
                let random = this.getRandomInteger()
                if (this.gridBoxes.item(random).innerHTML == '') {
                    this.gridBoxes.item(random).innerHTML = uinput = 'O';
                }
            } else {
                uinput = 'O';
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

let oxo = new TicTacToe;
oxo.run();

