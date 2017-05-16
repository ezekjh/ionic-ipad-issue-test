import { Component, Input }     from '@angular/core';

@Component({ selector: 'it-action-value', templateUrl: './action-value.component.html' })
export class ActionValueComponent {

    @Input() actionHandler: number;
    

    constructor() {
    }
    
    actionButtonTapped(index: number) {
        this.actionHandler = index;
    }
}