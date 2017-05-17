import { Component, ViewChild, Input } from '@angular/core';
import { Content, NavController } from 'ionic-angular';


@Component({ templateUrl: './item-list.component.html' })
export class ItemListComponent {
    @ViewChild(Content) content: Content;

    items: Array<any>;
    
    constructor(private nav: NavController) {
        this.items = [];
        for (var i=0; i<50; i++){
            this.items.push( { itemName: 'Item '+ i, actionHandler:0})
        }
    }

    public ionViewDidLoad() {

    }

     actionButtonTapped(item: any, index: number) {
        item.actionHandler = index;
    }
   
}