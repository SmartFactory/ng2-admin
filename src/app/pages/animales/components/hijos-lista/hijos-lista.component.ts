// import { Component } from '@angular/core';

// TODO SOMEDAY: Feature Componetized like CrisisCenter
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Hijo, HijoService }  from '../../hijo.service';



@Component({
  selector: 'hijos-lista',
  template: `

    <h2>SOY componente LISTA-Hijos</h2>

    <ul class="items">
      <li *ngFor="let hijo of hijos | async"
        [class.selected]="isSelected(hijo)"
        (click)="onSelect(hijo)">
        <span class="badge">{{ hijo.id }}</span> {{ hijo.name }}
      </li>
    </ul>
    
    <button routerLink="/pages/administration/plan">Go to /pages/administration/plan</button>

  `
})

export class HijosListaComponent implements OnInit {


  hijos: Observable<Hijo[]>;

  private selectedId: number;

  constructor(
    private service: HijoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {

    console.warn("<<<===>>>" + " ngOnInit --> 2 <--  HijosListaComponent -- ngOnInit");

    this.hijos = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params['id'];
        return this.service.getHijos();
      });
  }

  isSelected(hijo: Hijo) { return hijo.id === this.selectedId; }

  onSelect(hijo: Hijo) {
    console.log('hijo.id='+hijo.id);
    console.log('this.router.url='+this.router.url);

        // Navigate with relative link
        this.router.navigate(['../hijo', hijo.id], { relativeTo: this.route }); // regresa (../) por que esta en la LISTA que es un hiijo  con PATH VACIO ('')

        //this.router.navigate(['pages/hijos/hijo', hijo.id]);    // OJO !! NOTA: OTRA MANERA de hacerlo, SIN USAR RELATIVE PATHS

  }

}

