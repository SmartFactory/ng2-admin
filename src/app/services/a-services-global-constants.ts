/**
 * Constant values shared between services
 */

import { Headers } from '@angular/http';




export const JSONheaders: Headers = new Headers({'Content-Type': 'application/json'});



 export const ProjectUrl: string = 'http://587c175506972c1200b215a5.mockapi.io';// Project URL
 export const PrefixEndpointsAPIsUrl: string = 'fmpdashboard/restful/v1';// Add API prefix to all endpoints in this project

export const URLServicesEndpoints: string = `${ProjectUrl}/${PrefixEndpointsAPIsUrl}`; //'api/categories';  // URL to web api





// export const baseUrl: string = 'http://587c175506972c1200b215a5.mockapi.io/fmpdashboard/restful/v1'; 

    //   private headers = new Headers({'Content-Type': 'application/json'});

    //   private baseUrl = 'http://587c175506972c1200b215a5.mockapi.io/fmpdashboard/restful/v1';   // private baseUrl = 'http://583e26dc95d29812004e445c.mockapi.io/nuevorest/v1';
    //   private endpointUrl = 'categories';
    //   private categoriesUrl = `${this.baseUrl}/${this.endpointUrl}`; //'api/categories';  // URL to web api


            //  export const GlobalVariable = Object.freeze({
            //      BASE_API_URL: 'http://example.com/',
            //      //... more of your variables
            //  });