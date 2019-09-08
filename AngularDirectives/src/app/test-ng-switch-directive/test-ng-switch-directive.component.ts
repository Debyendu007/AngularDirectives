import { Component, OnInit } from '@angular/core';

@Component({
    selector: '[app-ngSwitch-directive]',
    template: `
        <div [ngSwitch]="color">
            <div *ngSwitchCase="'red'" [ngClass]="'color-red font-special'">You have selected red color</div>
            <div *ngSwitchCase="'green'" [ngClass]="'color-green font-special'">You have selected green color</div>
            <div *ngSwitchCase="'blue'" [ngClass]="'color-blue font-special'">You have selected blue color</div>
            <div *ngSwitchDefault>Wrong Selection or Unknown Color</div>
        </div>
    `,
    styles: [`
        .color-red {
            color: red;
        }
        .color-green {
            color: green;
        }
        .color-blue {
            color: blue;
        }
        .font-special {
            font-style: italic;
        }
    `]
})
export class TestNgSwitchDirectiveComponent implements OnInit {

    public color="red";

    constructor() { }

    ngOnInit() {
    }
}
