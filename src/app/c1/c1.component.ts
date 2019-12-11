import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  
  constructor() { }

  ngOnInit() {

  }
  getStatus(){
    return this.appareilStatus;
  }

  IsitOff(){
    if(this.appareilStatus === 'eteint'){
      return true;
    }
    return false;
  }

}
