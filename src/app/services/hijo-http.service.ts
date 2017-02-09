
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';



import { URLServicesEndpoints, JSONheaders } from './a-services-global-constants';

import { HijoModel } from '../models/hijo';
    // export class HijoModel {
        
    //   constructor(public id: string, public animalesId:string, public name: string) { }
    //     // constructor(public id: number, public name: string) { }
    // }


@Injectable()
export class HijoHttpService {
  
  private endpointUrl = 'hijos';
  private endpointUrlParent = 'animales';
  private URLParentServiceEndpoint = `${URLServicesEndpoints}/${this.endpointUrlParent}`;  // URL to web api service endpoint
    // private endpointUrl = 'hijos';
    // private hijosUrl = `${URLServicesEndpoints}/${this.endpointUrl}`;  // URL to web api service endpoint

  constructor(private http: Http) { }
 
  getHijosAnimal( animalId: string ): Promise<HijoModel[]> {
    console.log("<<=_-_=>> " + "getHijos [HijoHttpService]");


      let hijosAnimalUrl = `${this.URLParentServiceEndpoint}/${animalId}/${this.endpointUrl}`;  // URL to web api service endpoint
        // let hijosAnimalUrl = `${URLServicesEndpoints}/${this.endpointUrlParent}/${animalId}/${this.endpointUrl}`;  // URL to web api service endpoint


    return this.http.get(hijosAnimalUrl)
               .toPromise()
               //.then(response => response.json().data as HijoModel[])
              .then(response => response.json() as HijoModel[])
               .catch(this.handleError);
  }

  // getHijos(): Promise<HijoModel[]> {
  //   console.log("<<=_-_=>> " + "getHijos [HijoHttpService]");
  //   return this.http.get(this.hijosUrl)
  //              .toPromise()
  //              //.then(response => response.json().data as HijoModel[])
  //             .then(response => response.json() as HijoModel[])
  //              .catch(this.handleError);
  // }


  private handleError(error: any): Promise<any> {
    console.error('[hijo-service] An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
