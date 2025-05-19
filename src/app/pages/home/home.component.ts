import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CarrouselComponent } from "../../components/carrousel/carrousel.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, CarrouselComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
