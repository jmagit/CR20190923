import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../main/home/home.component';
import { NotificationComponent } from '../main/notification/notification.component';



@NgModule({
  declarations: [HomeComponent, NotificationComponent],
  exports: [HomeComponent, NotificationComponent],
  imports: [
    CommonModule
  ]
})
export class MainModule {
  constructor(@Optional() @SkipSelf() parentModule: MainModule) {
    if (parentModule) {
      const msg = `MainModule) has already been loaded.
      Import MainModule) once, only, in the root AppModule.`;
      throw new Error(msg);
    }
  }
}
