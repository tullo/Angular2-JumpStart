import { bootstrap } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { enableProdMode } from '@angular/core';

enableProdMode();

bootstrap(AppComponent).then(
    success => console.log('AppComponent bootstrapped!'),
    error => console.log(error)
);
