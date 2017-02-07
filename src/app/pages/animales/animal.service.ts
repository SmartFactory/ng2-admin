import { Injectable } from '@angular/core';

    import { AnimalHttpService } from '../../services/animal-http.service';


export class Animal {
  constructor(public id: string, public name: string) { }
    //constructor(public id: number, public name: string) { }
}


// let ANIMALES = [
//   new Animal(11, 'ANIMAL==Mr. Nice'),
//   new Animal(12, 'ANIMAL==Narco'),
//   new Animal(13, 'ANIMAL==Bombasto'),
//   new Animal(14, 'ANIMAL==Celeritas'),
//   new Animal(15, 'ANIMAL==Magneta'),
//   new Animal(16, 'ANIMAL==RubberMan')
// ];


//let animalesPromise = Promise.resolve(ANIMALES);


@Injectable()
export class AnimalService {


  animalesPromise2: Promise<Animal[]>;
  


constructor(private _animalHttpService: AnimalHttpService) {}




  getAnimales() {
    
    console.warn("<<<=__-__=>>>" + " AnimalService -->> 1 <<-- getAnimales");

    this.ensureThat_AnimalesPromise_IsDefined();

    return this.animalesPromise2;

    // console.error('chusma:: ' + 'AAA_111  this.animalesPromise2='); 
    // console.error(this.animalesPromise2);

        //this.animalesPromise2 = Promise.resolve(ANIMALES);

    // console.error('chusma:: ' + 'AAA_222  this.animalesPromise2='); 
    // console.error(this.animalesPromise2);

    
      //return animalesPromise;
  }




  getAnimal(id: number | string) {

    console.warn("<<<=__-__=>>>" + " AnimalService -->> 2 <<-- getAnimal");

    this.ensureThat_AnimalesPromise_IsDefined();

    this.animalesPromise2
      .then(animales => {
        console.warn('animales');
        console.warn(animales);
        console.warn('id');
        console.warn(id);
        console.warn('id');
        console.warn(id+"");
        
        animales.find(animal => animal.id == id+"")

        // animales.find(animal => animal.id === +id)

      });


    return this.animalesPromise2
      .then(animales => animales.find(animal => animal.id === id+""));
    // return this.animalesPromise2
    //   .then(animales => animales.find(animal => animal.id === +id));





    // console.error('chusma:: ' + 'BBB_111  this.animalesPromise2='); 
    // console.error(this.animalesPromise2);


    // console.error('chusma:: ' + 'BBB_222  this.animalesPromise2='); 
    // console.error(this.animalesPromise2);

          // if(this.animalesPromise2){
          //   console.warn('&& ' + 'this.animalesPromise2 ... YA EXISTE'); 
          // }else{
          //   console.warn('&& ' + 'this.animalesPromise2 ... 333 AUN NO existe');
          //   console.warn(this.animalesPromise2);

          //   this.getAnimales();

          //   console.warn('&& ' + 'this.animalesPromise2 ... 444 AUN NO existe');
          //   console.warn(this.animalesPromise2);

          // }

          // console.warn('CCC  this.animalesPromise2='); 
          // console.warn(this.animalesPromise2);
          
            // return animalesPromise
            //   .then(animales => animales.find(animal => animal.id === +id));

                      // if (crisis) {
                      //   return crisis;
                      // } else { // id not found
                      //   this.router.navigate(['/crisis-center']);
                      //   return null;
                      // }

  }




  ensureThat_AnimalesPromise_IsDefined(): void {
    //getAnimalesPromise2_ifIsUndefinded() {
    
    console.warn("()" + "ensureThat_AnimalesPromise_IsDefined");

    if( ! this.animalesPromise2 ){
      
      console.warn("()" + "NO_EXISTIA, GENERANDO--DEFINICION");

      // this.animalesPromise2 = Promise.resolve(ANIMALES);

              this.animalesPromise2 = this._animalHttpService
                    .getAnimales();

                // let uuu = this._animalHttpService
                //     .getAnimales()
                //     .then((data) => {
                //       console.error("$$$ -->> " + "fetchAllTargets [[GOT_data RETURNING_promise]]");
        
                //               // this.animalesPromise2 = data as Animal[];

                //               // this.animalesPromise2 = Promise.resolve(ANIMALES);

                //               //this.newSharedTargetArray = data;

                //     });
                          /*
                            newSharedTargetArray: TargetModel[];


                            constructor(private _animalHttpService: NewTargetService) {}


                            fetchAllTargets(): Promise<any> {

                              console.error("$$$ -->> " + "fetchAllTargets [[INIT]]");

                              return this._animalHttpService
                                  .getTargets()
                                  .then((data) => {
                                    console.error("$$$ -->> " + "fetchAllTargets [[GOT_data RETURNING_promise]]");
                                    this.newSharedTargetArray = data;
                                  });

                            }
                          */  

      

    }

              console.warn('QQQ  this.animalesPromise2=');
              console.warn(this.animalesPromise2);

            // if(this.animalesPromise2){
            //   console.warn('&& ' + 'this.animalesPromise2 ... YA EXISTE');
            //   console.warn(this.animalesPromise2);
            // }else{
            //   console.warn('&& ' + 'this.animalesPromise2 ... 333(antes de ENSURE) AUN NO existe');
            //   console.warn(this.animalesPromise2);

            //   this.animalesPromise2 = Promise.resolve(ANIMALES);

            //   console.warn('&& ' + 'this.animalesPromise2 ... 444(despues de ENSURE)  AUN NO existe');
            //   console.warn(this.animalesPromise2);

            // }

              // console.warn('WWW  this.animalesPromise2='); 
              // console.warn(this.animalesPromise2);

  }


}
