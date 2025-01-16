import { Component, Input, SimpleChanges } from '@angular/core';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DirectionService } from '../direction.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    DirectionService,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {

  @Input() value: number=64;
  @Input() login: boolean=false;

  constructor(
    private formBuilder: FormBuilder,
  ){}

  registerForm = this.formBuilder.group({
    email:  "",
    name: "",
    agreement: false
  })

  onSubmit() {
    let message = 'ok';
    let strIterator = message[Symbol.iterator]();
    console.log(strIterator)
    console.log(this.registerForm.value);
  }
}
