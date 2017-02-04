import { Component, ViewContainerRef } from '@angular/core';

import { GlobalState } from './global.state';
import { BaImageLoaderService, BaThemePreloader, BaThemeSpinner } from './theme/services';
import { layoutPaths } from './theme/theme.constants';

import 'style-loader!./app.scss';
import 'style-loader!./theme/initial.scss';
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
import 'style-loader!primeng/resources/primeng.min.css';
import 'style-loader!primeng/resources/themes/cupertino_fmp/theme.css';
  // import 'style-loader!primeng/resources/themes/cupertino/theme.css';
  // import 'style-loader!primeng/resources/themes/bootstrap/theme.css';
  // import 'style-loader!primeng/resources/themes/cruze/theme.css';
  // import 'style-loader!primeng/resources/themes/omega/theme.css';
    // <!--
    // <link rel="stylesheet" type="text/css" href="node_modules/primeng/resources/themes/omega/theme.css" />
    // <link rel="stylesheet" type="text/css" href="./node_modules/primeng/resources/primeng.min.css" />
    // <link rel="stylesheet" type="text/css" href="YOUR_PATH/font-awesome.min.css" />
    // -->   
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------

import { AaaSharedMbfsCategoryService } from './services/aaa-shared-mbfs-category.service';





/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  template: `
    <main [ngClass]="{'menu-collapsed': isMenuCollapsed}" baThemeRun>
      <div class="additional-bg"></div>
      <router-outlet></router-outlet>
    </main>
  `
})
export class App {

  isMenuCollapsed: boolean = false;

  constructor(private _state: GlobalState,
              private _imageLoader: BaImageLoaderService,
              private _spinner: BaThemeSpinner,
              private viewContainerRef: ViewContainerRef,
              private _aaaSharedMbfsCategoryService: AaaSharedMbfsCategoryService) {

    this._loadImages();

        this._loadMbfs();

    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      console.error("1 RECIBIO evento en SUBSCRIPCION (menu.isCollapsed) this.isMenuCollapsed="+this.isMenuCollapsed+"");
      console.error("2 RECIBIO evento en SUBSCRIPCION (menu.isCollapsed) isCollapsed="+isCollapsed+"");
      this.isMenuCollapsed = isCollapsed;
    });
  }
      // constructor(private _state: GlobalState,
      //             private _imageLoader: BaImageLoaderService,
      //             private _spinner: BaThemeSpinner,
      //             private viewContainerRef: ViewContainerRef) {

      //   this._loadImages();

      //   this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      //     console.error("1 RECIBIO evento en SUBSCRIPCION (menu.isCollapsed) this.isMenuCollapsed="+this.isMenuCollapsed+"");
      //     console.error("2 RECIBIO evento en SUBSCRIPCION (menu.isCollapsed) isCollapsed="+isCollapsed+"");
      //     this.isMenuCollapsed = isCollapsed;
      //   });
      // }

  public ngAfterViewInit(): void {
    // hide spinner once all loaders are completed
    BaThemePreloader.load().then((values) => {
      this._spinner.hide();
    });
  }

  private _loadImages(): void {
    // register some loaders
    BaThemePreloader.registerLoader(this._imageLoader.load(layoutPaths.images.root + 'sky-bg.jpg'));
  }


        private _loadMbfs(): void {
          
          // register some loaders
          BaThemePreloader.registerLoader( this._aaaSharedMbfsCategoryService.fetchAllMbfs() );
          
            /// this._aaaSharedMbfsCategoryService.fetchAllMbfs();

              /// BaThemePreloader.registerLoader(this._imageLoader.load(layoutPaths.images.root + 'sky-bg.jpg'));

        }  

}

/*

          import { SharedMbfsCategoryService } from '../../../../services/shared-mbfs-category.service';

                    constructor(
                      private _sharedMbfsCategoryService: SharedMbfsCategoryService
                    ) { }

                    ngOnInit() {
                      console.warn("--> ngOnInit (getMbfs AND getTasks AND getTargets) PREVIAMENTE");                      
                      
                      this._sharedMbfsCategoryService.fetchSharedMbfArray();

                    }

                    get mbfs_n_tasks_n_targets_ready(): boolean {
                      if( (this._sharedMbfsCategoryService.sharedMbfArray) ){
                        return true;
                      }
                      return false;
                    }

*/