import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  imports: [CommonModule, FormsModule],
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
      image: 'https://projetofinalapi.onrender.com/img/ranger.png',
      selected: false
    },
    {
      name: 'Mustang',
      brand: 'Ford',
      power: '488cv',
      torque: '564Nm',
      engine: 'Coyote 5.0L V8',
      year: '2025',
      image: 'https://projetofinalapi.onrender.com/img/mustang.png',
      selected: false
    },
    {
      name: 'Territory',
      brand: 'Ford',
      power: '170 cv',
      torque: '260 Nm',
      engine: '1.5L Turbo EcoBoost (4 cilindros)',
      year: '2025',
      image: 'https://projetofinalapi.onrender.com/img/territory.png',
      selected: false
    },
    {
      name: 'Maverick',
      brand: 'Ford',
      power: '194 cv',
      torque: '210 Nm',
      engine: '2.5L Atkinson Cycle Hybrid',
      year: '2025',
      image: 'https://projetofinalapi.onrender.com/img/maverick.jpg',
      selected: false
    }
  ];

  //Getter pra pegar os carros selecionados
  get selectedCars() {
    return this.cars.filter(car => car.selected);
  }

  //chamada quando checkbox é clicado
  onCarCheckboxChange(car: any): void {
    car.selected = !car.selected;

    //Garante que no máximo 2 carros estejam selecionados
    const selected = this.selectedCars;
    if (selected.length > 2) {
      car.selected = false;
    }
  }

  //Desabilita checkbox se já tiver 2 selecionados
  isCheckboxDisabled(index: number): boolean {
    return !this.cars[index].selected && this.selectedCars.length >= 2;
  }

  showComparison = false;

  animateButton(event: Event): void {
    const button = event.target as HTMLElement;
    button.classList.add('clicked');
    setTimeout(() => {
      button.classList.remove('clicked');
    }, 300);
  }

}

