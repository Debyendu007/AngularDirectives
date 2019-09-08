import { Component, OnInit } from '@angular/core';

@Component({
    selector: '[app-ngFor-directive]',
    template: `
        <div *ngFor="let color of colors; index as i"> <!--  first as f; odd as od; even as ev -->
            <h2 [style.color]="color">{{i+1}} {{color}}</h2>
        </div>
    `,
    styles: []
})
export class TestNgForDirectiveComponent implements OnInit {

    public colors = ["red", "blue", "green", "yellow"];

    constructor() { }

    ngOnInit() {
    }

}
