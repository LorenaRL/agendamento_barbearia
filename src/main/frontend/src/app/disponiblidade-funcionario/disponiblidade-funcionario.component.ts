import { Component, OnDestroy, OnInit } from '@angular/core';
import { FuncionarioService } from '../services/funcionario.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-disponiblidade-funcionario',
  templateUrl: './disponiblidade-funcionario.component.html',
  styleUrls: ['./disponiblidade-funcionario.component.css']
})
export class DisponiblidadeFuncionarioComponent implements OnDestroy {

  horaList: any[];
  timeCount = 0;
  disponiblidadeCount = 0;

  constructor(private service: FuncionarioService) { }

  ngOnInit(): void {
    this.disponivelForm.get('hora').setValue(this.buscarHoras());
  }
  

  disponivelForm = new FormGroup({
    data: new FormControl('', Validators.nullValidator && Validators.required),
    hora: new FormControl('', Validators.nullValidator && Validators.required)

  });

  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  
  buscarHoras() {
    this.service.getHora().pipe(takeUntil(this.destroy$)).subscribe((time: any[]) => {
      this.timeCount = time.length;
      this.horaList = time;
      return this.horaList;
    });
  }

  salvarDisponibilidade(){
    this.service.salvarDisponibilidadeDoFuncionario(this.disponivelForm.value).pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.disponiblidadeCount = this.disponiblidadeCount + 1;
      this.disponivelForm.reset();
  });}
  
  onSubmit() {
    this.disponivelForm.value;
    this.salvarDisponibilidade();
}


}
