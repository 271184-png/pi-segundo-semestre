import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  standalone: false,
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css'
})
export class Diretiva {
   mostrarMensagem = true;

  toggleMensagem(){
    this.mostrarMensagem = !this.mostrarMensagem;
  }

  listaitens=[
    {id:'10', nome: 'juninho',status:'ativo'},
    {id:'11', nome: 'jean',status:'inativo'},
    {id:'12', nome: 'arthur',status:'ativo'},
    ]

    
}


