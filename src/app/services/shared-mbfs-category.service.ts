
import { Injectable }    from '@angular/core';
// import { Headers, Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';
import { MbfModel } from '../models/mbf';

  import { MbfService } from './mbf.service';
    //import { NewMbfService } from './new-mbf.service';


@Injectable()
export class SharedMbfsCategoryService {

  sharedMbfArray: MbfModel[];


  constructor(private _mbfService: MbfService) {}


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