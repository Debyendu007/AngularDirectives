import { Component, OnInit } from '@angular/core';

@Component({
    selector: '[app-ngIf-directive]',
    template: `

        <div *ngIf="displayName; then thenBlock; else elseBlock"></div>

        <ng-template #thenBlock>
            <h2>If Block</h2>
        </ng-template>

        <ng-template #elseBlock>
            <h2>Else Block</h2>
        </ng-template>
    `,
    styleUrls: ['./test-ng-if-directive.component.css']
})
export class TestNgIfDirectiveComponent implements OnInit {

    public displayName=true;

    constructor() { }

    ngOnInit() {}

}
