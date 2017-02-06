import { Component, OnInit, Input } from '@angular/core';

    import { MbfModel } from '../../../models/mbf';

import { SharedMbfsCategoryService } from '../../../services/shared-mbfs-category.service';



@Component({
  selector: 'mbfs-category',
  template: require('./mbfs-category.html')
})
export class MbfsCategoryComponent implements OnInit {

  @Input() categoryId:string;



  mbfs: Array<MbfModel>;


  constructor(private _sharedMbfsCategoryService: SharedMbfsCategoryService) { }



  ngOnInit() {

    console.log("\t" + "ngOnInit MbfsCategoryComponent (filtering Mbfs for this Category["+this.categoryId+"] )");

    console.log("this._sharedMbfsCategoryService.sharedMbfArray");
    console.log(this._sharedMbfsCategoryService.sharedMbfArray);

    console.log("this.categoryId");
    console.log(this.categoryId);

    this.mbfs = this._sharedMbfsCategoryService.sharedMbfArray.filter(mbf => mbf.categoryId === this.categoryId );

    console.log("this.mbfs");
    console.log(this.mbfs);

  }



}

