
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { TaskModel } from '../models/task';


import { URLServicesEndpoints, JSONheaders } from './a-services-global-constants';


@Injectable()
export class TaskService {
  

  // private baseUrl = 'http://587c175506972c1200b215a5.mockapi.io/fmpdashboard/restful/v1';   // private baseUrl = 'http://583e26dc95d29812004e445c.mockapi.io/nuevorest/v1';
  private endpointUrl = 'tasks';
  private tasksUrl = `${URLServicesEndpoints}/${this.endpointUrl}`;  // URL to web api service endpoint

  constructor(private http: Http) { }

  getTasks(): Promise<TaskModel[]> {
    console.log("<<=_-_=>> " + "getTasks [TaskService]");
    return this.http.get(this.tasksUrl)
               .toPromise()
               //.then(response => response.json().data as TaskModel[])
              .then(response => response.json() as TaskModel[])
               .catch(this.handleError);
  }

  getTask(id: number): Promise<TaskModel> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      //.then(response => response.json().data as TaskModel)
      .then(response => response.json() as TaskModel)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.delete(url, {headers: JSONheaders})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(task: TaskModel): Promise<TaskModel> {

    let taskPayLoad = {
      name: task.name,
      description: task.description,
      mbfId: task.mbfId,
    }

    return this.http
      .post(this.tasksUrl, JSON.stringify(taskPayLoad), {headers: JSONheaders})
      .toPromise()
      //.then(res => res.json().data)
      .then(res => res.json())
      .catch(this.handleError);
  }
      /*
      create(name: string): Promise<TaskModel> {
        return this.http
          .post(this.tasksUrl, JSON.stringify({name: name}), {headers: JSONheaders})
          .toPromise()
          //.then(res => res.json().data)
          .then(res => res.json())
          .catch(this.handleError);
      }
      */

  update(task: TaskModel): Promise<TaskModel> {
    const url = `${this.tasksUrl}/${task.id}`;
    return this.http
      .put(url, JSON.stringify(task), {headers: JSONheaders})
      .toPromise()
      .then(() => task)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('[task-service] An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }




}
