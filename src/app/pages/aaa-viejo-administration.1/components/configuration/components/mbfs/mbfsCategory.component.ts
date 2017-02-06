import { Component, OnInit, Input } from '@angular/core';

    // import { MbfService } from '../../../../../../services/mbf.service';
    import { MbfModel } from '../../../../../../models/mbf';

import { SharedMbfsCategoryService } from '../../../../../../services/shared-mbfs-category.service';

@Component({
  selector: 'mbfs-category',
  template: require('./mbfs.html')
})
export class MbfsCategoryComponent implements OnInit {

  @Input() categoryId:string;




  mbfs: Array<MbfModel>;

  constructor(private _sharedMbfsCategoryService: SharedMbfsCategoryService) { }
    /// constructor(private _sharedMbfsCategoryService: SharedMbfsCategoryService) { } 

  ngOnInit() {

    console.log("\t" + "ngOnInit MbfsCategoryComponent (filtering Mbfs for this Category["+this.categoryId+"] )");

    this.mbfs = this._sharedMbfsCategoryService.sharedMbfArray.filter(mbf => mbf.categoryId === this.categoryId );

  }


}

