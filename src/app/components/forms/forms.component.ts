import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask'; // ✅ importa isso

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
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskDirective,],
  providers: [provideNgxMask()],
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
      tipoContato: ['', Validators.required],
      descricao: ['', Validators.required],
      receberNovidades: [false],
    });
  }

  onTermosChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    this.termosAceitos = checkbox.checked;
  }

  onSubmit(): void {
    if (this.contatoForm.invalid || !this.termosAceitos) {
      this.contatoForm.markAllAsTouched();
      return;
    }

    const form = this.contatoForm.value;
    const contato = new Contato(
      form.nome,
      form.sobrenome,
      form.email,
      form.telefone,
      form.contato
    );

    alert(`Obrigado sr(a) ${contato.nome}, os seus dados foram encaminhados com sucesso.`);
    console.table(contato);

    this.contatoForm.reset({
      nome: '',
      sobrenome: '',
      cpf: '',
      email: '',
      telefone: '',
      contato: '',
      tipoContato: '',
      descricao: '',
      receberNovidades: false,
    });
    this.termosAceitos = false;
  }
}
