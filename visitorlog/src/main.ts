import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { HomeAppModule } from './HomeApp/HomeApp.module';


platformBrowserDynamic().bootstrapModule(HomeAppModule)
  .catch(err => console.error(err));
