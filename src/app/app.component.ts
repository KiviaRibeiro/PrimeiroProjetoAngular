import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count = 0;
  nome = "Gurmercindo Gracindo Junior"
  teste: string = "";

  pessoas = [{nome: 'Fernanda',
              sobrenome: 'Maria'},
              {nome: 'Kivia',
              sobrenome: 'Ribeiro'},
              {nome: 'Jose',
              sobrenome: 'João'},
              {nome: 'Odete',
              sobrenome: 'Faria'},
            ]

  constructor(){

  }
  ngOnInit(): void {
    console.log(this.pessoas)
    let interval = setInterval(() => {
      this.count++;
      if(this.count === 10){
        clearInterval(interval);

      }
    },1000)
  }
  clicou(nome: string): void{
    console.log("Clicado", nome)
  }
}
