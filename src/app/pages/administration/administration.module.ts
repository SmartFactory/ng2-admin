


//MODULES
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
/// import { FormsModule as AngularFormsModule } from '@angular/forms';
/// import { NgaModule } from '../../theme/nga.module';

import { routing }       from './administration.routing';

    import {TabViewModule} from 'primeng/primeng';
import {AccordionModule} from 'primeng/primeng';     //accordion and accordion tab



//COMPONENTS      
    import { AdministrationComponent } from './administration.component';
      import { ConfigurationComponent } from './components/configuration';
      import { PlanComponent } from './components/plan';



import { MbfsCategoryComponent } from '../../fmp/mbfs/mbfs-category';
import { MbfComponent } from '../../fmp/mbfs/mbf';
      



@NgModule({
  imports: [
    CommonModule,
    
      TabViewModule,
AccordionModule,      

///     AngularFormsModule,
///     NgaModule,

    routing
  ],
  declarations: [
    
      AdministrationComponent,
        ConfigurationComponent,
        PlanComponent,

MbfsCategoryComponent,
MbfComponent
        
  ],
  providers: [

  ]
})

export class AdministrationModule { }
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
    //export default class AdministrationModule { }       //NOTA: Si se usa DEFAULT, en el ROUTING no se puede indicar la clase, sino que se debe dejar vacia y viceversa ... { path: 'administration', loadChildren: 'app/pages/administration/administration.module#AdministrationModule' }
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------