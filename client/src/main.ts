import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// platformBrowserDynamic().bootstrapModule(AppModule);
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
