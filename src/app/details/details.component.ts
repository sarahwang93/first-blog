import { Component, NgModule, OnChanges, OnInit, SimpleChanges, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleService } from '../role.service';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-details',
  imports: [CommonModule, FormsModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [RoleService]
})
export class DetailsComponent implements OnInit, OnChanges {

  images = [
    {
      title: 'Title #1',
      url: 'https://images.unsplash.com/photo-1588750099599-09efbe4377ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      downloadable: 2
    },
    {
      title: 'Title #2',
      url: 'https://images.unsplash.com/photo-1588598158189-3d6e4dade28b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      downloadable: 2
    },
    {
      title: 'Title #3',
      url: 'https://images.unsplash.com/photo-1588607684532-1c4a7ab618f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      downloadable: 0
    },
    {
      title: 'Title #4',
      url: 'https://images.unsplash.com/photo-1588710277537-126980e8d44e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      downloadable: 1
    },
    {
      title: 'Title #5',
      url: 'https://images.unsplash.com/photo-1588627541420-fce3f661b779?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      downloadable: 2
    },
    {
      title: 'Title #6',
      url: 'https://images.unsplash.com/photo-1588607778482-2358f4f0be5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80',
      downloadable: 1
    }
  ];

  activeImg: number = 0
  components: object = []
  items: object = []
  message: string = 'Details'
  searchField: string = ''

  @Input() value = "test"

  constructor(private roleServ: RoleService) { }

  ngOnInit(): void {
    this.components = 
    [
      { id : 1, premium: true },
      { id : 2, premium: false }
    ]
  ;
    this.items = [
      { name: "productname"},
      { name: "manufacturename"}
    ]

    this.message = this.roleServ.getMessage();
  }

  onchange(){
    this.value="change"
    console.log(this.value)
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes)
  }

  ngDoCheck(){

  }

  getNewMessage(){
    //injectable of service as an injector
    this.roleServ.changeMessage();
  }

  onSubmit(){
    console.log(this.searchField)
  }

}
