import {Component} from '@angular/core';


@Component({
  selector: 'animales',
  template: `bla<router-outlet></router-outlet>`
    // template: `
    //   <div>
    //     SOY componente Animales

    //     <div *ngFor="let hijo of hijosAnimales">
    //       SOY hijo_de_Animales : {{hijo}}
    //     </div>

    //   </div>
    // `
})
export class AnimalesComponent {


  // hijosAnimales: string[] = ["mbf1","mbf2","mbf3","mbf4","mbf5"];


  constructor() { }

  public ngOnInit():void {

    console.warn("<<<===>>>" + " ngOnInit --> 1 <--  AnimalesComponent -- ngOnInit");

  }




}
