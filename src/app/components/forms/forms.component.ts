import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

class Contato {
  constructor(
    public nome: string,
    public sobrenome: string,
    public email: string,
    public telefone: string,
    public contato: string
  ) { }
}

@Component({
  selector: 'app-forms',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent {
  contatoForm: FormGroup;
  termosAceitos: boolean = false;

  constructor(private fb: FormBuilder) {
    this.contatoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      contato: ['', Validators.required],
      tipoContato: ['', Validators.required], // Inicia com valor vazio (MOTIVO CONTATO)
      descricao: ['', Validators.required],
      receberNovidades: [false],
    });
  }

  // Marca os termos como aceitos ou não
  onTermosChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    this.termosAceitos = checkbox.checked;
  }

  // Método de envio do formulário
  onSubmit(): void {
    // Se o formulário for inválido ou os termos não forem aceitos, força exibir os erros
    if (this.contatoForm.invalid || !this.termosAceitos) {
      this.contatoForm.markAllAsTouched();
      return;
    }
  
    // Pega os dados do formulário
    const form = this.contatoForm.value;
  
    const contato = new Contato(
      form.nome,
      form.sobrenome,
      form.email,
      form.telefone,
      form.contato
    );
  
    // Exibe alerta e log dos dados
    alert(`Obrigado sr(a) ${contato.nome}, os seus dados foram encaminhados com sucesso.`);
    console.table(contato);
  
    // Após enviar, limpa os campos, incluindo o valor de "tipoContato"
    this.contatoForm.reset({
      nome: '',
      sobrenome: '',
      cpf: '',
      email: '',
      telefone: '',
      contato: '',
      tipoContato: '', // Garante que o valor de "MOTIVO CONTATO" está vazio
      descricao: '',
      receberNovidades: false, // Valor do checkbox "receberNovidades"
    });
    this.termosAceitos = false; // Reseta o checkbox de termos
  }
}
