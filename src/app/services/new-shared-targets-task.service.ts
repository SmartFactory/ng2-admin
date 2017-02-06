
import { Injectable }    from '@angular/core';
// import { Headers, Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';
import { TargetModel } from '../models/target';

  import { NewTargetService } from './new-target.service';


// import { URLServicesEndpoints, JSONheaders } from './a-services-global-constants';


@Injectable()
export class NewSharedTargetsTaskService {

  newSharedTargetArray: TargetModel[];


  constructor(private _newTargetService: NewTargetService) {}


  fetchAllTargets(): Promise<any> {

    console.error("$$$ -->> " + "fetchAllTargets [[INIT]]");

    return this._newTargetService
        .getTargets()
        .then((data) => {
          console.error("$$$ -->> " + "fetchAllTargets [[GOT_data RETURNING_promise]]");
          this.newSharedTargetArray = data;
        });

  }


}