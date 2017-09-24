console.log('Hello');
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {MyModule} from './module'

platformBrowserDynamic().bootstrapModule(MyModule);