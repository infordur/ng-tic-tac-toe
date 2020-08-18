import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {

    @Input() value: 'X' | 'O';

    constructor() { }

    ngOnInit() {
    }

}
