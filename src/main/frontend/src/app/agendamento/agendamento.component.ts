import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { AppService } from '../app.service';
import { AgendamentoService } from '../services/agendamento.service';


@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {

  x: any;

  constructor(private service: AgendamentoService) {
    this.buscarCategorias();
  }

  teste: any;
  ngOnInit(): void {
  }

  agendamentoForm = new FormGroup({
    cpf: new FormControl('', Validators.nullValidator && Validators.required),
    nome: new FormControl('', Validators.nullValidator && Validators.required),
    email: new FormControl('', Validators.nullValidator && Validators.required),
    telefone: new FormControl('', Validators.nullValidator && Validators.required),
    sexo: new FormControl('', Validators.nullValidator && Validators.required),
    servicos: new FormControl('', Validators.nullValidator && Validators.required),
    categoria: new FormControl('', Validators.nullValidator && Validators.required)
  });

  categorias: any[] = [];
  catCount = 0;

  destroy$: Subject<boolean> = new Subject<boolean>();

  buscarCategorias() {
    this.service.getTodasCategorias().pipe(takeUntil(this.destroy$)).subscribe((categorias: any[]) => {
      this.catCount = categorias.length;
      this.categorias = categorias;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}


