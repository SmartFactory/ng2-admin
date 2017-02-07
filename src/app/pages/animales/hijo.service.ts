import { Injectable } from '@angular/core';


export class Hijo {
  constructor(public id: number, public name: string) { }
}


let HIJOS = [
  new Hijo(11, 'HIJO==Mr. Nice'),
  new Hijo(12, 'HIJO==Narco'),
  new Hijo(13, 'HIJO==Bombasto'),
  new Hijo(14, 'HIJO==Celeritas'),
  new Hijo(15, 'HIJO==Magneta'),
  new Hijo(16, 'HIJO==RubberMan')
];


//let hijosPromise = Promise.resolve(HIJOS);


@Injectable()
export class HijoService {


  hijosPromise2: Promise<Hijo[]>;
  


  getHijos() {
    
    console.warn("<<<=__-__=>>>" + " HijoService -->> 1 <<-- getHijos");

    this.ensureThat_HijosPromise_IsDefined();

    return this.hijosPromise2;

    // console.error('chusma:: ' + 'AAA_111  this.hijosPromise2='); 
    // console.error(this.hijosPromise2);

        //this.hijosPromise2 = Promise.resolve(HIJOS);

    // console.error('chusma:: ' + 'AAA_222  this.hijosPromise2='); 
    // console.error(this.hijosPromise2);

    
      //return hijosPromise;
  }




  getHijo(id: number | string) {

    console.warn("<<<=__-__=>>>" + " HijoService -->> 2 <<-- getHijo");

    this.ensureThat_HijosPromise_IsDefined();

    return this.hijosPromise2
      .then(hijos => hijos.find(hijo => hijo.id === +id));


    // console.error('chusma:: ' + 'BBB_111  this.hijosPromise2='); 
    // console.error(this.hijosPromise2);


    // console.error('chusma:: ' + 'BBB_222  this.hijosPromise2='); 
    // console.error(this.hijosPromise2);

          // if(this.hijosPromise2){
          //   console.warn('&& ' + 'this.hijosPromise2 ... YA EXISTE'); 
          // }else{
          //   console.warn('&& ' + 'this.hijosPromise2 ... 333 AUN NO existe');
          //   console.warn(this.hijosPromise2);

          //   this.getHijos();

          //   console.warn('&& ' + 'this.hijosPromise2 ... 444 AUN NO existe');
          //   console.warn(this.hijosPromise2);

          // }

          // console.warn('CCC  this.hijosPromise2='); 
          // console.warn(this.hijosPromise2);
          
            // return hijosPromise
            //   .then(hijos => hijos.find(hijo => hijo.id === +id));

                      // if (crisis) {
                      //   return crisis;
                      // } else { // id not found
                      //   this.router.navigate(['/crisis-center']);
                      //   return null;
                      // }

  }




  ensureThat_HijosPromise_IsDefined(): void {
    //getHijosPromise2_ifIsUndefinded() {
    
    console.warn("()" + "ensureThat_HijosPromise_IsDefined");

    if( ! this.hijosPromise2 ){
      
      console.warn("()" + "NO_EXISTIA, GENERANDO--DEFINICION");

      this.hijosPromise2 = Promise.resolve(HIJOS);
    }

              // console.warn('QQQ  this.hijosPromise2=');
              // console.warn(this.hijosPromise2);

            // if(this.hijosPromise2){
            //   console.warn('&& ' + 'this.hijosPromise2 ... YA EXISTE');
            //   console.warn(this.hijosPromise2);
            // }else{
            //   console.warn('&& ' + 'this.hijosPromise2 ... 333(antes de ENSURE) AUN NO existe');
            //   console.warn(this.hijosPromise2);

            //   this.hijosPromise2 = Promise.resolve(HIJOS);

            //   console.warn('&& ' + 'this.hijosPromise2 ... 444(despues de ENSURE)  AUN NO existe');
            //   console.warn(this.hijosPromise2);

            // }

              // console.warn('WWW  this.hijosPromise2='); 
              // console.warn(this.hijosPromise2);

  }


}
