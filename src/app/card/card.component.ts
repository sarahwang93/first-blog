import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {

  result = (function() {
    const init = {
      id: 0,
      methods: {
        call(){
          console.log('Call');
        }
      }
    }
    return init;
  })();  
}
