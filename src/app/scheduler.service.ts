import { APP_INITIALIZER, Injectable, PLATFORM_INITIALIZER, Inject } from '@angular/core';
import { NUser } from '../model/nuser.model';
import { User } from '../model/user.model';
import { SchedulerSetService } from './scheduler-set.service';
import { Greeter, GREETER } from '../classes/greeter.class';

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {

  users: NUser[] = [
    { id: 1, name: 'John Doe', premium: false },
    { id: 2, name: 'Jane Doe', premium: true },
    { id: 3, name: 'Alice Doe', premium: true },
    { id: 4, name: 'Bob Doe', premium: true },
  ];

  constructor(@Inject(GREETER) public greeter: typeof Greeter) { }

  useAccessFactory = (userLogin: User) => {
    return new SchedulerSetService(userLogin)
  }

  getUser() {
    const user = this.users[0]
    return new this.greeter(user.name)
  }


  loginServiceProvider = {
    provide: SchedulerSetService,
    useFactory: this.useAccessFactory
  }

  initializeProvider = [
    { provider: PLATFORM_INITIALIZER,
      useFactory: this.useAccessFactory
    },
    { 
      provider: APP_INITIALIZER,
      useFactory: this.useAccessFactory
    }
  ]
}
