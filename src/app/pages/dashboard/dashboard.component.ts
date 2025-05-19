import { Component, inject } from '@angular/core';
import { GetCarListService } from '../../services/get-car-list.service';
import { CommonModule } from '@angular/common'
import { Veiculo } from '../../models/veiculo.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VinComponent } from "../../components/vin/vin.component";
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";


@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, VinComponent, HeaderComponent, FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  veiculos: Veiculo[] | null = null;
  selecionado = 0;
  seletorDeCarros: number = 0;
  selectorVehicles?: Veiculo;

  constructor(private serviceVehicles: GetCarListService) { }

  ngOnInit(): void {
    this.serviceVehicles.getCarList().subscribe({
      next: (carros: Veiculo[]) => {
        this.veiculos = carros;

        this.selectorVehicles = this.veiculos[0];
        console.log('Veiculos selecionado', this.veiculos)
        console.log('Selecionado', this.selecionado)
      }
    })
  }

  carroSelecionado(): void {
    this.selecionado = this.seletorDeCarros;

    if (this.veiculos && this.veiculos.length > this.selecionado) {
      this.selectorVehicles = this.veiculos[this.selecionado];
      console.log(this.veiculos, this.selecionado)
    }
  }

}
