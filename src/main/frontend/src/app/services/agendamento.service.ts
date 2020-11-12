import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { map } from 'rxjs/operators';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  private headers = new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json');
  private urlAgenda:string;
  private baseUrlService:string = '';

  constructor(private http: HttpClient) {
    this.urlAgenda = 'http://localhost:8080/agenda';
    this.headers.append('Content-Type', 'application/json');
   }
    

/**CONSULTA TODAS AS CATEGORIAS CADASTRADAS */
    getTodasCategorias(){      
      return this.http.get(this.urlAgenda + '/categorias',{headers: this.headers});
    }

    getServicosDaCategoria(categoria:number){
      return this.http.get(this.urlAgenda + '/servicosDaCategoria/'+ categoria,{headers: this.headers});
    }

  } 
    