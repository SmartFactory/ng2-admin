import {Component} from '@angular/core';

import {BaThemePreloader, BaThemeSpinner} from '../../theme/services';

@Component({
  selector: 'test',
  styleUrls: ['./test.scss'],
  templateUrl: './test.html'
})
export class Test {

  constructor(private _spinner: BaThemeSpinner) {
    console.error("$$$--->>>" + "inside CONSTRUCTOR");

//    this._preloadData_Tezt();
  }
      // constructor (private _baAmChartThemeService:BaAmChartThemeService) {
      //   console.error("$$$--->>>" + "inside CONSTRUCTOR");
      //   this._preloadData_Tezt();
      // }
          // constructor() {
          // }

  public ngOnInit():void {

    console.error("$$$--->>>" + "inside ngOnInit");

    this._preloadData_Tezt();
  }


  private _preloadData_Tezt():void {

    this._spinner.show();

    console.error("$$$--->>>" + "CONSTRUCTOR started PRELOADing data from a PROMISE");



      BaThemePreloader.registerLoader(this._loadData_Tezt_promise(4000));

      BaThemePreloader.registerLoader(this._loadData_Tezt_promise(6000));

      BaThemePreloader.registerLoader(this._loadData_Tezt_promise(8000));

              // BaThemePreloader.registerLoader(new Promise((resolve, reject) => {
              //       setTimeout(() => {
              //         console.error("$$$--->>>" + "_loadData_Tezt_promise RESOLVEd ... LOADING img should be REMOVED");
              //         resolve();
              //       }, 4000);
              // }));

                    // BaThemePreloader.registerLoader(new Promise((resolve, reject) => {
                    //   let amChartsReadyMsg = 'AmCharts ready';

                    //   if (AmCharts.isReady) {
                    //     resolve(amChartsReadyMsg);
                    //   } else {
                    //     AmCharts.ready(function () {
                    //       resolve(amChartsReadyMsg);
                    //     });
                    //   }
                    // }));


  }

  private _loadData_Tezt_promise(tiempoTimeout:number):Promise<any> {

    console.error("$$$--->>>" + "_loadData_Tezt_promise STARTed ... waiting PROMISE to be RESOLVEd");

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.error("$$$--->>>" + "_loadData_Tezt_promise RESOLVEd ... LOADING img should be REMOVED");
        resolve();
      }, tiempoTimeout);
    });
  }


  
  public ngAfterViewInit(): void {
    // hide spinner once all loaders are completed
    BaThemePreloader.load().then((values) => {

      console.error("$$$--->>>" + "ngAfterViewInit   this._spinner.hide();");

      this._spinner.hide();
    });
  }

}
