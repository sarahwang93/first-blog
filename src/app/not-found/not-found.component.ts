import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';


interface User {
  name: string;
  email: string;
  password: string;
  premium: boolean;
}

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent implements OnInit {
  
  userA: User | undefined;
  

  ngOnInit(): void {
    this.userA = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: 'password123',
      premium: true
    };
    if(!this.userA.name){
    
    } 
    
  }
  

  // ...
}
