import { Injectable, Optional, Input, InjectionToken, Injector } from '@angular/core';
import { User } from '../model/user.model';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class SchedulerSetService {

  private allowScheduler: boolean = false;

  @Input() logger: LoggerService =  new LoggerService();

  constructor(@Optional() private loggerService: LoggerService) { 

    const TOKEN = new InjectionToken<string>('token');
    const providers = [
      {
        provide: TOKEN,
        useValue: {
          tokenstr: "tokeninfo"
        }
      }
    ]

    const injector = Injector.create({ providers })
    const myToken = injector.get(TOKEN);

    if(!this.loggerService){
      this.logger = console;
    } else{
      this.logger = loggerService
    } 
  }

  logFunc(msg: string){
    //localStorage.setItem('key_log', msg)
    this.logger.log(msg);
  }

  canUserLogin(user: User) {
    if(user.accessLevel == 'AccessAllowed'){
      
    }
  }
}
