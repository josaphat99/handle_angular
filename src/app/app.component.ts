import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuth = true;
  appareil1 = 'Machine a laver';
  appareil2 = 'Ordinateur';
  appareil3 = 'Television';
  constructor(){
    setTimeout(
      () =>{
        this.isAuth = false;
      },4000
    );
  }

  onAllumer(){
    console.log("Appareils allumes");
  }
}
