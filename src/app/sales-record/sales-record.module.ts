import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MatCard, MatCardModule } from '@angular/material/card';
import { SalesRecordComponent } from './sales-record.component';
import { FirstblogService } from '../firstblog.service';
import { BlogService } from '../blog.service';



@NgModule({
    declarations: [],
    imports: [],
    providers: [{provide: FirstblogService, useClass: BlogService}],
    exports: [],
    bootstrap: [SalesRecordComponent]
})


export class SalesRecordModule {

}