
import { Injectable }    from '@angular/core';
// import { Headers, Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';
import { TaskModel } from '../models/task';

  import { TaskService } from './task.service';
    //import { NewTaskService } from './new-task.service';


@Injectable()
export class SharedTasksMbfService {

  sharedTaskArray: TaskModel[];


  constructor(private _taskService: TaskService) {}



  fetchAllTasks(): Promise<any> {

    console.error("$$$ -->> " + "fetchAllTasks [[INIT]]");

    return this._taskService
        .getTasks()
        .then((data) => {
          console.error("$$$ -->> " + "fetchAllTasks [[GOT_data RETURNING_promise]]");
          this.sharedTaskArray = data;
        });

  }

}