// import { Component } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { HijoService }  from '../../hijo.service';
  import { HijoModel } from '../../../../models/hijo';
    // import { Hijo, HijoService }  from '../../hijo.service';

@Component({
  selector: 'hijo',
    // template: `
    // <h2>SOY componente Hijo</h2>
    // `
  template: `
    <h2>SOY componente Hijo 22</h2>

    <div *ngIf="hijo">

        SOY Hijo : 

          <h3>"{{ hijo.name }}"</h3>
          <div>
            <label>Id: </label>{{ hijo.id }}</div>
          <div>
            <label>Name: </label>
            <input [(ngModel)]="hijo.name" placeholder="name"/>
          </div>
          
          <hr>
            <h4>VIEW nietos-lista</h4>
            
              nietos-lista
              <!--nietos-lista></nietos-lista-->

          <hr>

          <!--hr>
            <h4>ROUTER nietos-lista</h4>
            <router-outlet></router-outlet>
          <hr-->

    </div>

    <p>
      <button (click)="gotoHijosLista()">gotoHijosLista</button>
    </p>
  `
})

export class HijoComponent implements OnInit {

  // ngOnInit() {
  //   console.warn("<<<===>>>" + " ngOnInit --> 77 <--  HijoComponent -- ngOnInit");
  // }

//((((((((()))))))))
//((((((((()))))))))
  hijo: HijoModel;


  constructor(
    private service: HijoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}


  ngOnInit() {

    console.warn("<<<===>>>" + " ngOnInit --> 3 <--  HijoComponent -- ngOnInit");

console.error("!!! OJO OJO !!!  .. PENDIENTE getHIJO");
// console.error("this.route.params");
// console.error(this.route.params);
// console.error("this.route.parent");
// console.error(this.route.parent);
// console.error("this.route.parent.params");
// console.error(this.route.parent.params);
// console.error("!!! OJO OJO !!!  .. PENDIENTE getHIJO");

    this.route.params
      .switchMap( (params: Params) => this.service.getHijo( params['id'], this.route.parent.params['id'] ) )
      .subscribe((hijo: HijoModel) => this.hijo = hijo);

      //     this.route.params
      //       .switchMap( (params: Params) => (
      //         this.service.getHijo(params['id']);
      // console.error(this.route.parent.params);
      // console.error("222 !!! OJO OJO !!!  .. PENDIENTE getHIJO");        
      //       ))
      //       .subscribe((hijo: HijoModel) => this.hijo = hijo);

            // this.route.params
            //   .switchMap((params: Params) => this.service.getHijo(params['id']))
            //   .subscribe((hijo: HijoModel) => this.hijo = hijo);      

                // this.route.params
                //   // (+) converts string 'id' to a number
                //   .switchMap((params: Params) => this.service.getHijo(+params['id']))
                //   .subscribe((hijo: HijoModel) => this.hijo = hijo);

  }

  gotoHijosLista() {
    let hijoId = this.hijo ? this.hijo.id : null;

    console.log('hijoId='+hijoId);
    console.log('this.router.url='+this.router.url);

    console.log('this.route.url='+this.route.url); 
    console.log(this.route.url);    

this.router.navigate(['../../'], { relativeTo: this.route }); // regresa al papa (../../), lo que forzara que se recargue la LISTA,   por que esta en el ID del NIETO  con PATH ( hijos/hijo/id ) 


// this.router.navigate(['../'], { relativeTo: this.route }); // regresa al papa (../../), lo que forzara que se recargue la LISTA,   por que esta en el ID del NIETO  con PATH ( hijos/hijo/id ) 

// this.router.navigate(['../../'], { relativeTo: this.route }); // regresa al papa (../../), lo que forzara que se recargue la LISTA,   por que esta en el ID del NIETO  con PATH ( hijos/hijo/id ) 


//this.router.navigate(['pages/hijos']);    // OJO !! NOTA: OTRA MANERA de hacerlo, SIN USAR RELATIVE PATHS



    //this.router.navigate(['../11'], { relativeTo: this.route }); // regresa (../) por que esta en la LISTA que es un nieto con PATH VACIO ('')

    
    //this.router.navigate([''], { relativeTo: this.route });

    // this.router.navigate(['']);

      // this.router.navigate(['/hijos', { id: hijoId, foo: 'foo' }]);


      //this.router.navigate(['../']);
      // this.router.navigate(['../../']);
      //this.router.navigate(['', { id: hijoId, foo: 'foo' }]);
    //this.router.navigate(['../', { id: hijoId, foo: 'foo' }]);
      // this.router.navigate(['../../', { id: hijoId, foo: 'foo' }]);

    // // Navigate with relative link
    // this.router.navigate(['../', '17'], { relativeTo: this.route }); // regresa (../) por que esta en la LISTA que es un nieto con PATH VACIO ('')

      // // Pass along the hijo id if available
      // // so that the HeroList component can select that hijo.
      // // Include a junk 'foo' property for fun.
      // this.router.navigate(['/hijos', { id: hijoId, foo: 'foo' }]);
  }
//((((((((()))))))))
//((((((((()))))))))



}

