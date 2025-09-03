import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'estrutura', 
    loadChildren: () => import('./estrutura/estrutura-module').then(m => m.EstruturaModule)},

 {path: 'angular-material', 
    loadChildren: () => import('./angular-material/angular-material-module').then(m => m.AngularMaterialModule)}

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
