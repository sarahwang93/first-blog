import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForOf } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-subenterprise',
  standalone: true,
  imports: [ RouterOutlet, NgForOf ],
  templateUrl: './subenterprise.component.html',
  styleUrl: './subenterprise.component.css'
})
export class SubenterpriseComponent {

  constructor(private http: HttpClient) {
    
  }

  query = ''
  @Input() drinks: Array<any> = []
  @Output() submitted = new EventEmitter<string>();

  onSubmit(event: Event){
    event.preventDefault();
    this.submitted.emit(this.query);
  }

  process_each(each: any){
    return Array.of(each)[0]['drinks']
  }

  query_each(query_res: Observable<Object>){
    query_res.subscribe(each => {
      this.drinks = this.process_each(each)
    })

    return this.drinks
  }

  public search(query: string) {
    const searchres =  this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php', {
      params: {
        s: query,
      }
    })
    this.query_each(searchres)
    return searchres
  }
  
}
