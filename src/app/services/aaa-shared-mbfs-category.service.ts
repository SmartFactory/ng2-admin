
import { Injectable }    from '@angular/core';
// import { Headers, Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';
import { MbfModel } from '../models/mbf';

  import { MbfService } from './mbf.service';
    //import { NewMbfService } from './new-mbf.service';


@Injectable()
export class AaaSharedMbfsCategoryService {

  sharedMbfArray: MbfModel[];


  constructor(private _mbfService: MbfService) {}


  fetchSharedMbfArray(): MbfModel[] {

    // console.log("$$$ -->> " + "[MBFS] INI(si hay:DEVUELVE, si no hay:CONSULTA) fetchSharedMbfArray");
    
    if (!this.sharedMbfArray) {

      console.log("$$$ -->> " + "[MBFS] IF(aun no hay) fetchSharedMbfArray");

      // console.log("getMbfs LLAMADA 2");

      this._mbfService
          .getMbfs()
          .then((data) => {
            this.sharedMbfArray = data;
          });   
    }else{
      console.log("$$$ -->> " + "[MBFS] ELSE(ya habia) fetchSharedMbfArray");
    }

    return this.sharedMbfArray;
  }


        fetchAllMbfs(): Promise<any> {

          console.error("$$$ -->> " + "fetchAllMbfs [[INIT]]");

          return this._mbfService
                .getMbfs()
                .then((data) => {
                  console.error("$$$ -->> " + "fetchAllMbfs [[GOT_data RETURNING_promise]]");
                  this.sharedMbfArray = data;
                });  

        }



}