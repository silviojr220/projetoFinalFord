import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { TableComponent } from "../../components/table/table.component";

@Component({
  selector: 'app-lancamento',
  imports: [HeaderComponent, FooterComponent, TableComponent],
  templateUrl: './lancamento.component.html',
  styleUrl: './lancamento.component.css'
})
export class LancamentoComponent {

}
