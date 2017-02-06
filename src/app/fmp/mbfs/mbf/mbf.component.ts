import { Component, OnInit, Input } from '@angular/core';

    import { MbfModel } from '../../../models/mbf';




@Component({
  selector: 'mbf',
  template: require('./mbf.html')
})
export class MbfComponent implements OnInit {

  @Input() mbf:MbfModel;



  constructor() { }


  ngOnInit() {

    console.log("ngOnInit this.mbf");
    console.log(this.mbf);

  }



}

