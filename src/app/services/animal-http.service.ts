
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';



import { URLServicesEndpoints, JSONheaders } from './a-services-global-constants';


import { AnimalModel } from '../models/animal';
    // export class AnimalModel {
        
    //   constructor(public id: string, public name: string) { }
    //     // constructor(public id: number, public name: string) { }
    // }


@Injectable()
export class AnimalHttpService {
  

  private endpointUrl = 'animales';
  private animalesUrl = `${URLServicesEndpoints}/${this.endpointUrl}`;  // URL to web api service endpoint

  constructor(private http: Http) { }
 
  getAnimales(): Promise<AnimalModel[]> {
    console.log("<<=_-_=>> " + "getAnimales [AnimalHttpService]");
    return this.http.get(this.animalesUrl)
               .toPromise()
               //.then(response => response.json().data as AnimalModel[])
              .then(response => response.json() as AnimalModel[])
               .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('[animal-service] An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
