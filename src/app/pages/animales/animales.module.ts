import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './animales.routing';

import { AnimalesComponent } from './animales.component';

  import { AnimalesListaComponent } from './components/animales-lista/animales-lista.component';
  import { AnimalComponent } from './components/animal/animal.component';
    import { AnimalService }  from './animal.service';
import { AnimalHttpService } from '../../services/animal-http.service';

  import { HijosListaComponent } from './components/hijos-lista/hijos-lista.component';
    // import { HijoService }  from './hijo.service';     //  NOTA: probando compartir servicio solo para cada ANIMAL
import { HijoHttpService } from '../../services/hijo-http.service';


import { AnimalPageComponent } from './components/animal/animal-page.component';

import { HijoComponent } from './components/hijo/hijo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    AnimalesComponent,
      AnimalesListaComponent,
      AnimalComponent,

        HijosListaComponent,

AnimalPageComponent,

HijoComponent

  ],
  providers: [
    AnimalService,
AnimalHttpService,

    // HijoService,
HijoHttpService

  ]
})
export class AnimalesModule {}
  // export default class AnimalesModule {}    //NOTA: Si se usa DEFAULT, en el ROUTING no se puede indicar la clase, sino que se debe dejar vacia y viceversa ... { path: 'animales', loadChildren: 'app/pages/animales/animales.module#AnimalesModule' },
