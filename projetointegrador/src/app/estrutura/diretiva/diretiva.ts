import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  standalone: false,
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css'
})
export class Diretiva {
   mostrarMensagem = true;
   fonte: number = 15;


  toggleMensagem(){
    this.mostrarMensagem = !this.mostrarMensagem;
  }

  aumentarFonte(){
    this.fonte = this.fonte +2;
  }
  dimunirFonte(){

    this.fonte = this.fonte +2;
  }



  alunos = [
    {id:'10', nome: 'juninho',ativo:false},
    {id:'11', nome: 'jean',ativo:true},
    {id:'12', nome: 'arthur',ativo:true},
    ];

    
}


