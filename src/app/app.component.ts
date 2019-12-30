import {Component} from '@angular/core';

import {CellaservService} from './cellaserv.service';
import {CellaservApiService} from './cellaserv_api';

@Component({
  selector : 'app-root',
  templateUrl : './app.component.html',
  styleUrls : [ './app.component.scss' ]
})
export class AppComponent {
  title = 'cellaserv3-dashboard';

  // List of services that we have a dedicated component for
  SERVICES = [ 'config', 'ai' ];

  constructor(public cs: CellaservApiService, public broker: CellaservService) {
  }
}
