class TicTacToe {

    constructor() {

        this.gridBoxes = document.getElementsByClassName("box");
        this.buttonRestart = document.getElementById("restart");
        this.message = document.getElementById("message");
        this.location = document.location;
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

                self.drawTheSymbolInTheBox(boxSelected, "player");

            });

        }
    }

    checkRow(i, symbol) {

        if (this.gridBoxes.item(this.possiblities[i]).innerHTML == symbol &&
            this.gridBoxes.item(this.possiblities[i + 1]).innerHTML == symbol &&
            this.gridBoxes.item(this.possiblities[i + 2]).innerHTML == symbol) {

            return true

        } else {

            return false

        }
    }

    checkWinner() {

        for (let i = 0; i < 24; i += 3) {

            if (this.checkRow(i, "X")) {

                this.message.innerHTML = "WIN !"

            } else if (this.checkRow(i, "O")) {

                this.message.innerHTML = "LOST !"

            } else if (!this.countBoxEmpty()) {

                this.message.innerHTML = "DRAW !"

            }

        }
    }

    drawTheSymbolInTheBox(box, whoDraw) {

        let self = this;

        if (box.innerHTML == "" && this.message.innerHTML == "") {

            if (whoDraw == "player") {

                box.innerHTML = "X"
                box.style.color = "#1abc9c"
                this.checkWinner()
                setTimeout(function () { self.computerChoosesStrategy() }, 300);
                
            }

            else {

                box.innerHTML = "O"
                box.style.color = "#e67e22"
                this.checkWinner()

            }

        }

    }

    computerChoosesStrategy() {

        if (this.completeOrBreakARow("O")) {

        }
        
        else if (this.completeOrBreakARow("X")) {

        }

        else { this.randomChoice() };
    }

    completeOrBreakARow(symbol) {

        for (let i = 0; i < 24; i += 3) {

            for (let j = 0; j < 3; j++) {

                for (let k = 0; k < 3; k++) {

                    if (j != k &&
                        this.gridBoxes.item(this.possiblities[i + j]).innerHTML == symbol &&
                        this.gridBoxes.item(this.possiblities[i + k]).innerHTML == symbol) {

                        for (let l = 0; l < 3; l++) {

                            if (l != j && l != k &&
                                this.gridBoxes.item(this.possiblities[i + l]).innerHTML == '') {

                                this.drawTheSymbolInTheBox(this.gridBoxes.item(this.possiblities[i + l], "computer"));

                                return true

                            }
                        }

                    }
                }
            }
        }
    }

    countBoxEmpty() {

        let occurencies = 0;

        for (let i = 0; i < 9; i++) {

            if (this.gridBoxes.item(i).innerHTML == '') {

                occurencies++;

            }
        }

        return occurencies;
    }

    randomChoice() {

        let findABoxEmpty = false;

        while (findABoxEmpty == false) {

            if (this.countBoxEmpty()) {

                let random = this.getRandomInteger();

                if (this.gridBoxes.item(random).innerHTML == '') {
                    this.drawTheSymbolInTheBox(this.gridBoxes.item(random, "computer"));
                    findABoxEmpty = true;

                }

            } else {

                findABoxEmpty = true;

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

