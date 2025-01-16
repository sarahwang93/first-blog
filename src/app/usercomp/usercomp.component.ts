import { Component,Input, Output, output, EventEmitter } from '@angular/core';
import { DUMMY_USER } from '../../model/dummyuser.model';

@Component({
  selector: 'app-usercomp',
  standalone: true,
  imports: [],
  templateUrl: './usercomp.component.html',
  styleUrl: './usercomp.component.css'
})

export class UsercompComponent {

    //the selectedUser need to be updated with click 
    selectedUser = DUMMY_USER[0];
    @Input({ required:true }) user!: {
      id: string, 
      name: string, 
      avatar: string
    };
    @Input({ required:true }) selected!: boolean;

    /*
    @Input({ required: false }) avatar!: string;
    @Input({ required: true}) id!: string;
    @Input({ required: true}) name!: string;*/
    @Output() select = new EventEmitter<string>();

    onSelectUser() {
      this.select.emit(this.user.id);
      console.log(this.user.id);
    }
}
