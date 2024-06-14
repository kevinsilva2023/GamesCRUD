import { Component, OnInit } from '@angular/core';
import { ConsoleService } from '../consoles.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-console',
  templateUrl: './cadastro-console.component.html',
  styleUrls: ['./cadastro-console.component.scss']
})

export class CadastroConsoleComponent implements OnInit {

  formCadastro!: FormGroup

  constructor(
    private service: ConsoleService,
    private formBuilder: FormBuilder,
    private rotas: Router
  ) {}

  ngOnInit(): void {
    this.formCadastro = this.formBuilder.group({
      modelo: ['', Validators.compose([
        Validators.required
      ])],
      fabricante: ['', Validators.compose([
        Validators.required
      ])]
    })
  }

  cadastrarConsole() {
    if(this.formCadastro.valid) {
      this.service.cadastrar(this.formCadastro.value)
        .subscribe(() => { 
          this.rotas.navigate(['home'])
      })
    }
  }

}
