import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

    cells: any[];
    xTurn: boolean;
    winner: string;

    constructor() {}

    ngOnInit() {
        this.newGame();
    }

    newGame() {
        this.cells = Array(9).fill(null);
        this.winner = null;
        this.xTurn = true;
    }

    get player() {
        return this.xTurn ? 'X' : 'O';
    }

    makeMove(idx: number) {
        if(!this.cells[idx] && !this.winner) {
            this.cells.splice(idx, 1, this.player);
            this.xTurn = !this.xTurn;
        }

        this.winner = this.calculateWinner();
    }

    calculateWinner() {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let index = 0; index < lines.length; index++) {
            const [a, b, c] = lines[index];
            if(
                this.cells[a] &&
                this.cells[a] === this.cells[b] &&
                this.cells[a] === this.cells[c]
            ) {
                return this.cells[a];
            }
        }

        return null;
    }

}
