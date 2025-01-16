import { NgModule } from "@angular/core"
import { AboutComponent } from "../about/about.component";
import { DetailsComponent } from "../details/details.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { interval, timeInterval } from "rxjs";

@NgModule({
    declarations: [],
    imports: [CommonModule, FormsModule],
    exports: []
})

export class SharedModule {

    
    sharedInterval(): void {
        const seconds = interval(1000);
        seconds.pipe(
            timeInterval()
        ).subscribe(
            (val) => {
                console.log(val);
            }
        )
    }
    

}