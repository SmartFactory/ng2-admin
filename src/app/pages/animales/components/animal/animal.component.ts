// import { Component } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Animal, AnimalService }  from '../../animal.service';


@Component({
  selector: 'animal',
  template: `
    <h2>SOY componente Animal</h2>

    <div *ngIf="animal">

        SOY Animal : 

          <h3>"{{ animal.name }}"</h3>
          <div>
            <label>Id: </label>{{ animal.id }}</div>
          <div>
            <label>Name: </label>
            <input [(ngModel)]="animal.name" placeholder="name"/>
          </div>
          <p>
            <button (click)="gotoAnimalesLista()">Back</button>
          </p>
          
          <hr>
            <h4>VIEW hijos-lista</h4>
            <hijos-lista></hijos-lista>
          <hr>

          <hr>
            <h4>ROUTER hijos-lista</h4>
            <router-outlet></router-outlet>
          <hr>

    </div>
  `
})

export class AnimalComponent implements OnInit {



//((((((((()))))))))
//((((((((()))))))))
  animal: Animal;


  constructor(
    private service: AnimalService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {

    console.warn("<<<===>>>" + " ngOnInit --> 3 <--  AnimalComponent -- ngOnInit");

    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.service.getAnimal(+params['id']))
      .subscribe((animal: Animal) => this.animal = animal);

  }

  gotoAnimalesLista() {
    let animalId = this.animal ? this.animal.id : null;

    console.log('animalId='+animalId);
    console.log('this.router.url='+this.router.url);

    console.log('this.route.url='+this.route.url); 
    console.log(this.route.url);    

this.router.navigate(['../../'], { relativeTo: this.route }); // regresa al papa (../../), lo que forzara que se recargue la LISTA,   por que esta en el ID del HIJO  con PATH ( animales/animal/id ) 

//this.router.navigate(['pages/animales']);    // OJO !! NOTA: OTRA MANERA de hacerlo, SIN USAR RELATIVE PATHS



    //this.router.navigate(['../11'], { relativeTo: this.route }); // regresa (../) por que esta en la LISTA que es un hijo con PATH VACIO ('')

    
    //this.router.navigate([''], { relativeTo: this.route });

    // this.router.navigate(['']);

      // this.router.navigate(['/animales', { id: animalId, foo: 'foo' }]);


      //this.router.navigate(['../']);
      // this.router.navigate(['../../']);
      //this.router.navigate(['', { id: animalId, foo: 'foo' }]);
    //this.router.navigate(['../', { id: animalId, foo: 'foo' }]);
      // this.router.navigate(['../../', { id: animalId, foo: 'foo' }]);

    // // Navigate with relative link
    // this.router.navigate(['../', '17'], { relativeTo: this.route }); // regresa (../) por que esta en la LISTA que es un hijo con PATH VACIO ('')

      // // Pass along the animal id if available
      // // so that the HeroList component can select that animal.
      // // Include a junk 'foo' property for fun.
      // this.router.navigate(['/animales', { id: animalId, foo: 'foo' }]);
  }
//((((((((()))))))))
//((((((((()))))))))


}

