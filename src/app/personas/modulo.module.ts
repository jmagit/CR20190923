import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonasComponent } from './componente.component';
import { FormsModule } from '@angular/forms';
import { IndraCoreModule } from 'src/indra-core';
import { CommonAppModule } from '../common-app';



@NgModule({
  declarations: [
    PersonasComponent
  ],
  exports: [
    PersonasComponent
  ],
  imports: [
    CommonModule, FormsModule, IndraCoreModule, CommonAppModule,
  ]
})
export class PersonasModule { }
