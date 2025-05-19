import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehicleData } from '../../models/vehiclesVin.model';
import { PostVinListService } from '../../services/post-vin-list.service';


@Component({
  selector: 'app-vin',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './vin.component.html',
  styleUrl: './vin.component.css'
})
export class VinComponent {
  barraDePesquisa: FormControl = new FormControl('');
  dadosVeiculosData: VehicleData[] = [];
  veiculosDetalhado?: VehicleData;

  constructor(private buscarDadosService: PostVinListService) { }

  pesquisar(): void {
    const vin = this.barraDePesquisa.value
    if (!vin) return;

    console.log('pesquisar disparado, VIN =', vin);
    if (vin.length > 19) {
      this.buscarDadosService.buscarDadosVeiculos(vin).subscribe({
        next: arr => {
          console.log('A resposta da API (array):', arr);
          this.dadosVeiculosData = arr;

          this.veiculosDetalhado = arr.length > 0 ? arr[0] : undefined;
        },
        error: err => {
          console.error('Erro no subscribe', err);
          this.dadosVeiculosData = [];
          this.veiculosDetalhado = undefined;
        }
      })
    }
  }
}
