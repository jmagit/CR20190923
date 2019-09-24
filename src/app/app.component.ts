import { Component } from '@angular/core';
import { LoggerService } from 'src/indra-core';
import { NotificationService } from './common-app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola mundo';

  // constructor(notify: NotificationService) {
  //   notify.add('Esto es una notificación');
  //   notify.remove(0);
  //   notify.add(null);
  //   notify.remove(0);
  // }
  // constructor(out: LoggerService) {
  //   out.error('Es un error');
  //   out.warn('Es un warn');
  //   out.info('Es un info');
  //   out.log('Es un log');
  // }
}
