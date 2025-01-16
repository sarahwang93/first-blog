import { AsyncValidator, FormControl, AbstractControl } from "@angular/forms";
import { Observable, of } from "rxjs";

export class CompromisedPassword implements AsyncValidator{
    validate(control: AbstractControl): Observable<Object>{
    // 检查密码是否被泄露
    return of({compromised: true});
    }
}
