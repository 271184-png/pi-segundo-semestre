import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialRoutingModule } from './angular-material-routing-module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Atividade } from '../AngularMaterial/atividade/atividade';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialRoutingModule,
    MatToolbarModule
  ],
  declarations: [
    Atividade
  ]
})
export class AngularMaterialModule { }
