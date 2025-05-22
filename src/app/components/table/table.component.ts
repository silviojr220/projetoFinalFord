import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-table',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  cars = [
    {
      name: 'Ranger',
      brand: 'Ford',
      power: '250cv/170cv',
      torque: '600Nm/405Nm',
      engine: '3.0 V6 ou 2.0',
      year: '2024',
      price: 'R$ 289.990',
      image: 'https://projetofinalapi.onrender.com/img/ranger-Photoroom.png',
      selected: false
    },
    {
      name: 'Mustang',
      brand: 'Ford',
      power: '488cv',
      torque: '564Nm',
      engine: 'Coyote 5.0L V8',
      year: '2025',
      price: 'R$ 529.000',
      image: 'https://projetofinalapi.onrender.com/img/mustang-Photoroom.png',
      selected: false
    },
    {
      name: 'Territory',
      brand: 'Ford',
      power: '170 cv',
      torque: '260 Nm',
      engine: '1.5L Turbo EcoBoost (4 cilindros)',
      year: '2025',
      price: 'R$ 209.990',
      image: 'https://projetofinalapi.onrender.com/img/territory-Photoroom.png',
      selected: false
    },
    {
      name: 'Maverick',
      brand: 'Ford',
      power: '194 cv',
      torque: '210 Nm',
      engine: '2.5L Atkinson Cycle Hybrid',
      year: '2025',
      price: 'R$ 244.890',
      image: 'https://projetofinalapi.onrender.com/img/maverick-Photoroom.png',
      selected: false
    }
  ];
  
  //Getter pra pegar os carros selecionados
  get selectedCars() {
    return this.cars.filter(car => car.selected);
  }

  //chamada quando checkbox é clicado
  onCarCardClick(car: any): void {
    if (car.selected) {
      car.selected = false;
      return;
    }
  
    if (this.selectedCars.length < 2) {
      car.selected = true;
    }
  }
  
  // Se nenhum carro estiver selecionado
  get isNoneSelected(): boolean {
    return this.selectedCars.length === 0;
  }
  
  showComparison = false;

  animateButton(event: Event): void {
    const button = event.target as HTMLElement;
    button.classList.add('clicked');
    setTimeout(() => {
      button.classList.remove('clicked');
    }, 300);
  }

  preventClickIfDisabled(event: Event, isDisabled: boolean): void {
    if (isDisabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  carToShow: any = null;

showCarInfo(car: any) {
  this.carToShow = car;
}


}

