// import { Component } from '@angular/core';

// TODO SOMEDAY: Feature Componetized like CrisisCenter
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Animal, AnimalService }  from '../../animal.service';



@Component({
  selector: 'animales-lista',
  template: `

    <h2>SOY componente LISTA-Animales</h2>

    <ul class="items">
      <li *ngFor="let animal of animales | async"
        [class.selected]="isSelected(animal)"
        (click)="onSelect(animal)">
        <span class="badge">{{ animal.id }}</span> {{ animal.name }}
      </li>
    </ul>
    
    <button routerLink="/pages/administration/plan">Go to /pages/administration/plan</button>

  `
    // template: `
    //   <div>
    //     SOY componente LISTA-Animales

    //     <div *ngFor="let animal of animales">
    //       SOY animal_de_animales : {{animal}}
    //     </div>

    //   </div>
    // `
})

export class AnimalesListaComponent implements OnInit {



  // animales: string[] = ["animal_1","animal_2","animal_3","animal_4","animal_5"];


  // constructor() { }

  // public ngOnInit():void {

  //   console.error("<<<===>>>" + "AnimalesListaComponent -- ngOnInit");

  // }

//((((((((()))))))))
//((((((((()))))))))
  animales: Observable<Animal[]>;

  private selectedId: string;
    //private selectedId: number;

  constructor(
    private service: AnimalService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {

    console.warn("<<<===>>>" + " ngOnInit --> 2 <--  AnimalesListaComponent -- ngOnInit");

    this.animales = this.route.params
      .switchMap((params: Params) => {
        
        this.selectedId = params['id'];
          //this.selectedId = +params['id'];

        return this.service.getAnimales();
      });
  }

  isSelected(animal: Animal) { return animal.id === this.selectedId; }

  onSelect(animal: Animal) {
    console.log('animal.id='+animal.id);
    console.log('this.router.url='+this.router.url);

        // Navigate with relative link
        this.router.navigate(['../animal', animal.id], { relativeTo: this.route }); // regresa (../) por que esta en la LISTA que es un hijo con PATH VACIO ('')

        //this.router.navigate(['pages/animales/animal', animal.id]);    // OJO !! NOTA: OTRA MANERA de hacerlo, SIN USAR RELATIVE PATHS

                // this.router.navigate(['../animal', animal.id]);

                // // Navigate with relative link
                // this.router.navigate(['../animal', '123'], { relativeTo: this.route });
                //   // this.router.navigate([animal.id], { relativeTo: this.route });

                // // Relative navigation back to the crises
                // this.router.navigate(['../', { id: animal.id, foo: 'foo' }], { relativeTo: this.route });

                // this.router.navigate(['/animal', '123']);

                // this.router.navigate(['/animal', animal.id]);
  }
//((((((((()))))))))
//((((((((()))))))))

}

