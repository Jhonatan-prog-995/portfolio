import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'] // Corrigido aqui
})
export class PerfilComponent implements OnInit {
  nomeCompleto: string = "Desenvolvedor Fullstack";
  nomeExibido: string = ""; // Corrigido ponto e vírgula
  index: number = 0;

  ngOnInit(): void {
    this.digitarNome();
  }

  digitarNome() {
    if (this.index < this.nomeCompleto.length) {
      this.nomeExibido += this.nomeCompleto.charAt(this.index); // Corrigido variável errada
      this.index++;
      setTimeout(() => this.digitarNome(), 100); // Ajuste na chamada da função
    }
  }
}
