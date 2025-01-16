import { Directive, Injectable, Input, ElementRef, HostListener, HostBinding, OnChanges } from '@angular/core';
import { Role, User } from '../model/user.model';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';

enum UserRole {
  BasicUser = 'basic',
  TrailUser = 'trial',
  PremiumUser = 'premium',
  AdminUser = 'admin',
}


@Injectable({
  providedIn: 'root'
})

@Directive({
  standalone: true,
  selector:'[roleDirec]'
})

@Injectable()
export class RoleService implements OnChanges{

  @Input() hasRole: boolean;
  @Input() input: boolean = false;
  private message: string = 'messsage from role';  

  private readonly role: BehaviorSubject<UserRole> = new BehaviorSubject<UserRole>(UserRole.BasicUser);
  private subscription: Subscription = new Subscription();

  constructor() {
    this.hasRole = true
    console.log(this.hasRole)
  }

  timeTakingTask(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('done')
      }, 2000)
    });
  }


  get userRoles$(): Observable<UserRole>{

    let promiseRef: Promise<any> = this.timeTakingTask();
    promiseRef.then(
      (result) => console.log(result),
      (error) => console.log(error)
    )
    this.role.asObservable().subscribe(
      (result) => console.log(result),
      (error) => console.log(error),
      () => console.log("complete")
    )

    return this.role.asObservable();
  }

  ngOnChanges(){
    this.subscription.unsubscribe();
    this.subscription = new Subscription();

    const sub = this.userRoles$.subscribe(role => {
      
    })

    this.subscription.add(sub);
    return new Observable((observer) => {
      let roles = ['basic', 'premium', 'past', 'future'];
      if(this.input){
        roles.map(value => 
          observer.next(value)
        );
      }else{
        observer.error("error");
      }
      observer.complete();
    })
  }

  getMessage(): string{
    return this.message;
  }

  changeMessage():string{
    this.message = 'new message from role';
    console.log(this.message)
    return this.message
  }

  @HostListener('click')
  onClick(event: Event){
    console.log('roleClick')
  }

}
