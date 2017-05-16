import { Component, Input, OnInit } from '@angular/core';


@Component({ selector: 'it-inspection-interior-item', templateUrl: './inspection-interior-item.component.html' })
export class InspectionInteriorItemComponent implements OnInit {
   
    @Input() item: any;


    constructor() {
        
    }

    ngOnInit() {
       
    }    

  
}