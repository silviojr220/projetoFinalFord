import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InicialComponent } from '../../components/inicial/inicial.component';

@Component({
  selector: 'app-login',
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, InicialComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
