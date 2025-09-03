import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Atividade } from '../AngularMaterial/atividade/atividade';


const routes: Routes = [
  {path:'atividade', component: Atividade}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularMaterialRoutingModule { }
