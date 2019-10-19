import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import {SplitButtonModule} from 'primeng/splitbutton';

@NgModule({
  imports: [
    ButtonModule, SplitButtonModule
  ],
  exports: [
    ButtonModule, SplitButtonModule    
  ]
})
export class PrimeModule {}