import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';


const materialComponent:any=[MatButtonModule]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,materialComponent
  ],
  exports:[materialComponent]
})
export class AngularMaterialModule { }
