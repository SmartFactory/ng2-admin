import { Routes, RouterModule }  from '@angular/router';

import { ModuleWithProviders } from '@angular/core';

import { AnimalesComponent } from './animales.component';
  import { AnimalesListaComponent } from './components/animales-lista/animales-lista.component';
  import { AnimalComponent } from './components/animal/animal.component';

    import { HijosListaComponent } from './components/hijos-lista/hijos-lista.component';



// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: AnimalesComponent,
    children: [
      {
        path: '',
        component: AnimalesListaComponent
      },
      {
        path: 'animal/:id',
        component: AnimalComponent,
        children: [
          {
            path: 'hijos-lista',
            component: HijosListaComponent
          },
          // {
          //   path: 'animal/:id',
          //   component: AnimalComponent
          // }
        ]
      }
    ]
      // children: [
      //   //{ path: 'treeview', component: TreeViewComponent }
      // ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
