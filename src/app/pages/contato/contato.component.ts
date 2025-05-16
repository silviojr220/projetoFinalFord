import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";
import { FormsComponent } from "../../components/forms/forms.component";

@Component({
  selector: 'app-contato',
  imports: [FooterComponent, HeaderComponent, FormsComponent],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {

}
