// import { Component } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AnimalService }  from '../../animal.service';
  import { AnimalModel } from '../../../../models/animal';
    // import { Animal, AnimalService }  from '../../animal.service';

//__%&% import { HijoService }  from '../../hijo.service';


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
          
          <hr>
            <h4>VIEW hijos-lista</h4>
            <hijos-lista></hijos-lista>
          <hr>

          <hr>
            <h4>ROUTER hijos-lista</h4>
            <router-outlet></router-outlet>
          <hr>

    </div>
    
    <p>
      <button (click)="gotoAnimalesLista()">gotoAnimalesLista</button>
    </p>
  `,
  providers: [
//__%&%     HijoService
  ]
})

export class AnimalComponent implements OnInit {



//((((((((()))))))))
//((((((((()))))))))
  animal: AnimalModel;


  constructor(
    private service: AnimalService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {

    console.warn("<<<===>>>" + " ngOnInit --> 3 <--  AnimalComponent -- ngOnInit");

    this.route.params
      .switchMap((params: Params) => this.service.getAnimal(params['id']))
      .subscribe((animal: AnimalModel) => this.animal = animal);
          // this.route.params
          //   // (+) converts string 'id' to a number
          //   .switchMap((params: Params) => this.service.getAnimal(+params['id']))
          //   .subscribe((animal: AnimalModel) => this.animal = animal);

  }

  gotoAnimalesLista() {
    let animalId = this.animal ? this.animal.id : null;

    console.log('AA animalId='+animalId);
    console.log('this.router='+this.router);
    console.log(this.router);  

    console.log('this.route='+this.route); 
    console.log(this.route);    

         this.router.navigate(['../../../'], { relativeTo: this.route }); // regresa al papa (../../), lo que forzara que se recargue la LISTA,   por que esta en el ID del HIJO  con PATH ( animales/animal/id ) 


        // this.router.navigate(['../../'], { relativeTo: this.route }); // regresa al papa (../../), lo que forzara que se recargue la LISTA,   por que esta en el ID del HIJO  con PATH ( animales/animal/id ) 


// this.router.navigate(['../'], { relativeTo: this.route }); // regresa al papa (../../), lo que forzara que se recargue la LISTA,   por que esta en el ID del HIJO  con PATH ( animales/animal/id ) 

// this.router.navigate(['../../'], { relativeTo: this.route }); // regresa al papa (../../), lo que forzara que se recargue la LISTA,   por que esta en el ID del HIJO  con PATH ( animales/animal/id ) 


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

