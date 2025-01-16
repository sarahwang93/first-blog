import { enableProdMode } from '@angular/core';
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { environment } from '../environment.prod';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

if(environment.production){
  enableProdMode();
}

export const config = mergeApplicationConfig(appConfig, serverConfig);
