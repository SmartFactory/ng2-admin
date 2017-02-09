import { Component } from '@angular/core';

// import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute, Params } from '@angular/router';

// import { AnimalService }  from '../../animal.service';
//   import { AnimalModel } from '../../../../models/animal';
//     // import { Animal, AnimalService }  from '../../animal.service';

// import { HijoService }  from '../../hijo.service';

import { HijoService }  from '../../hijo.service';

@Component({
  selector: 'animal-page',

  template: `AniMAL__PAGE: <router-outlet></router-outlet>`,
  providers: [
    HijoService
  ]

  // template: `
  //   <h2>SOY componente Animal</h2>

  //   <div *ngIf="animal">

  //       SOY Animal : 

  //         <h3>"{{ animal.name }}"</h3>
  //         <div>
  //           <label>Id: </label>{{ animal.id }}</div>
  //         <div>
  //           <label>Name: </label>
  //           <input [(ngModel)]="animal.name" placeholder="name"/>
  //         </div>
  //         <p>
  //           <button (click)="gotoAnimalesLista()">gotoAnimalesLista</button>
  //         </p>
          
  //         <hr>
  //           <h4>VIEW hijos-lista</h4>
  //           <hijos-lista></hijos-lista>
  //         <hr>

  //         <hr>
  //           <h4>ROUTER hijos-lista</h4>
  //           <router-outlet></router-outlet>
  //         <hr>

  //   </div>
  // `,
  // providers: [
  //   HijoService
  // ]
})


export class AnimalPageComponent {
  // export class AnimalPageComponent implements OnInit {



//   animal: AnimalModel;


//   constructor(
//     private service: AnimalService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) {}

//   ngOnInit() {

//     console.warn("<<<===>>>" + " ngOnInit --> 3 <--  AnimalComponent -- ngOnInit");

//     this.route.params
//       .switchMap((params: Params) => this.service.getAnimal(params['id']))
//       .subscribe((animal: AnimalModel) => this.animal = animal);
//           // this.route.params
//           //   // (+) converts string 'id' to a number
//           //   .switchMap((params: Params) => this.service.getAnimal(+params['id']))
//           //   .subscribe((animal: AnimalModel) => this.animal = animal);

//   }

//   gotoAnimalesLista() {
//     let animalId = this.animal ? this.animal.id : null;

//     console.log('animalId='+animalId);
//     console.log('this.router.url='+this.router.url);

//     console.log('this.route.url='+this.route.url); 
//     console.log(this.route.url);    

// this.router.navigate(['../'], { relativeTo: this.route }); // regresa al papa (../../), lo que forzara que se recargue la LISTA,   por que esta en el ID del HIJO  con PATH ( animales/animal/id ) 

//   }

}

