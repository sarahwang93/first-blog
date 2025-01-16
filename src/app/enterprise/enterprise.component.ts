import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit}  from '@angular/core';
import { SalesRecordComponent } from '../sales-record/sales-record.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet, RouterModule } from '@angular/router';
import { SchedulerSetService } from '../scheduler-set.service';
import { FirstblogService } from '../firstblog.service';
import { delay } from 'rxjs/operators';
import { HttpClient, HttpClientXsrfModule } from '@angular/common/http';
import { NgIf } from '@angular/common'
import { threadId } from 'worker_threads';
import { Http } from '@angular/http';

@Component({
  selector: 'app-enterprise',
  standalone: true,
  imports: [SalesRecordComponent, RouterOutlet, RouterModule, NgIf],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: './enterprise.component.html',
  styleUrl: './enterprise.component.css'
})
export class EnterpriseComponent implements OnInit{

  constructor(private scheduler: SchedulerSetService, private firstBlog: FirstblogService,
    /*private httpCXM: HttpClientXsrfModule*/
  ) {

  }
  message:string = '';
  isLoading: boolean = true;
  info: any = {};
  location: string = '';

  receiveMessageFromSales($event:any){
    this.message = $event
    console.log(this.message)
    
  }

  enableCXM(){
    /*
    return this.httpCXM = HttpClientXsrfModule.withOptions(
      {
        cookieName: "XSRF-TOKEN",
        headerName: "X-XSRF-TOKEN"
      }
    )*/
  }

  ngOnInit(){
    this.scheduler.logFunc("enterprise log")
    //this.httpCXM = this.enableCXM()
    this.firstBlog.loadData()
    .subscribe(data => 
      { console.log(data.results[0])
        this.info = data.results[0];
        // how to modify the isLoading after get result 
        this.isLoading = true;
      }, 
      );
  }
}
