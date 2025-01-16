import { Injectable, OnChanges, OnInit, EventEmitter, SimpleChanges, Directive, Input, ElementRef, Output } from '@angular/core'; 
import { DirectionService } from './direction.service';
import { HttpClient } from '@angular/common/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Subscription, BehaviorSubject, Observable } from 'rxjs';
import { BlogService } from './blog.service';
//import axios from 'axios';


const successCallback = (position: any) => {
  console.log(position)
}

const errorCallback = (error: any) => {
  console.log(error)
}


export interface Blog {
   blogTitle: string; 
   blotTime: string;
   blogLocation: string;
   blogContent: string;
}

@Injectable({providedIn: 'root'})


@Directive({
  selector: '[firstAvator]'
})

export class FirstblogService extends BlogService implements OnInit {
  
  @Input() size: number = 30;
  @Input() blogExist: boolean = false;
  @Output() changePage = new EventEmitter<string>();
  private message:string = 'blogservice';
  private subscription: Subscription = new Subscription();

  constructor(private elementRef: ElementRef, private http: HttpClient) { 
    super()
  }

  getAllBlogs() {
       //var res = axios.get("https://jsonplaceholder.typicode.com/posts");
      return this.message;
  }

  getBlogContent(){
    return "blogContent";
  }
    
  ngOnInit(): void{
    const size = '10px'
    const currentDate = new Date();
    exports = () => {
       console.log("hello!")
    }
  
    module.exports = () => {
       console.log("hello!")
    }
    this.elementRef.nativeElement.style.width = size;
    this.elementRef.nativeElement.style.height = size;

  }

  loadData(): Observable<any>{
     return this.http.get<any>('https://randomuser.me/api')
  }

  ngAfterContentChecked(){

  }

}


