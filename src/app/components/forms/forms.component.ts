import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

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

  telefoneMask: string = '(00) 00000-0000';

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
      pais: [''],
    });
  }

  onTermosChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    this.termosAceitos = checkbox.checked;
  }

  ngOnInit(): void {
    this.contatoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', [Validators.email]],
      telefone: [''],
      contato: ['', Validators.required],
      tipoContato: ['', Validators.required],
      descricao: ['', Validators.required],
      receberNovidades: [false]
    });

    // Atualiza validador dependendo do tipo de contato
    this.contatoForm.get('contato')?.valueChanges.subscribe((valor) => {
      const email = this.contatoForm.get('email');
      const telefone = this.contatoForm.get('telefone');

      if (valor === 'Email') {
        email?.setValidators([Validators.required, Validators.email, dominioEmailValidator()]);
        telefone?.clearValidators();
      } else if (valor === 'Telefone') {
        telefone?.setValidators([Validators.required]);
        email?.clearValidators();
      } else {
        telefone?.clearValidators();
        email?.clearValidators();
      }

      email?.updateValueAndValidity();
      telefone?.updateValueAndValidity();
    });


    // Domínios permitidos
    const dominiosPermitidos = ['gmail.com', 'outlook.com', 'yahoo.com'];

    function dominioEmailValidator(): ValidatorFn {
      return (control: AbstractControl): ValidationErrors | null => {
        const email = control.value;
        if (!email) return null;

        const dominio = email.split('@')[1];
        if (!dominio) return { dominioInvalido: true };

        return dominiosPermitidos.includes(dominio.toLowerCase()) ? null : { dominioInvalido: true };
      };
    }

    this.contatoForm.get('pais')?.valueChanges.subscribe((codigoPais) => {
      switch (codigoPais) {
        case 'br':
          this.telefoneMask = '+55 (00) 00000-0000';
          break;
        case 'us':
          this.telefoneMask = '+1 (000) 000-0000';
          break;
        case 'uk':
          this.telefoneMask = '+44 0000 000000';
          break;
        case 'de':
          this.telefoneMask = '+49 (0000) 000000';
          break;
        case 'pt':
          this.telefoneMask = '+351 000 000 000';
          break;
        default:
          this.telefoneMask = '+00 (00) 00000-0000';
      }
    });
    
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
