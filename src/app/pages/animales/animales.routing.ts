import { Routes, RouterModule }  from '@angular/router';

import { ModuleWithProviders } from '@angular/core';

import { AnimalesComponent } from './animales.component';
  import { AnimalesListaComponent } from './components/animales-lista/animales-lista.component';
  import { AnimalComponent } from './components/animal/animal.component';

    import { HijosListaComponent } from './components/hijos-lista/hijos-lista.component';

import { AnimalPageComponent } from './components/animal/animal-page.component';

import { HijoComponent } from './components/hijo/hijo.component';



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
        path: ':id',
        component: AnimalPageComponent,
        children: [
          {
            path: '',
            component: AnimalComponent
          },
            {
              path: 'hijos/:id',
              component: HijoComponent
            },
        ]
      },
          
          // {
          //   path: ':id',
          //   component: AnimalComponent,
          //   children: [
          //         // path: 'animal/:id',
          //         // component: AnimalComponent,
          //         // children: [

          //     // {
          //     //   path: 'hijos/:id',
          //     //   component: HijosListaComponent
          //     // },
          //         // {
          //         //   path: 'hijos-lista',
          //         //   component: HijosListaComponent
          //         // },
          //         // {
          //         //   path: 'animal/:id',
          //         //   component: AnimalComponent
          //         // }
          //   ]
          // },
          // // {
          // //   path: ':id/hijos/:id',
          // //   component: HijosListaComponent
          // // },
    ]
      // children: [
      //   //{ path: 'treeview', component: TreeViewComponent }
      // ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
