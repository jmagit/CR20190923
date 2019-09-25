import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERSONAS_COMPONENTES } from './componente.component';
import { FormsModule } from '@angular/forms';
import { IndraCoreModule } from 'src/indra-core';
import { CommonAppModule } from '../common-app';



@NgModule({
  declarations: [
    PERSONAS_COMPONENTES
  ],
  exports: [
    PERSONAS_COMPONENTES
  ],
  imports: [
    CommonModule, FormsModule, IndraCoreModule, CommonAppModule,
  ]
})
export class PersonasModule { }
