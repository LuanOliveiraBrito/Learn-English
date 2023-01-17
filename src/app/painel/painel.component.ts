import { Component } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { frases } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css'],
})
export class PainelComponent {
  public frases: Frase[] = frases;
  public instrucao: string = 'Traduza a frase:';
  public resposta: string = '';
  public rodada: number = 0;
  public rodadaFrase!: Frase;
  public progresso: number = 0;
  public tentativas : number = 3;

  constructor() {
    this.atualizaRodada();
  }

  atualizaResposta(resposta: Event): void {
    this.resposta = (resposta.target as any).value;
    console.log(this.resposta);
  }

  verificarResposta(): void {
    if (
      (this.resposta as string).toLowerCase().replaceAll('.', '') ==
      this.rodadaFrase.frasePtBr
    ) {
      alert('A tradução está correta');
      this.rodada++;
      this.progresso = this.progresso + 100 / this.frases.length;
      this.atualizaRodada();
    } else {
      alert('A tradução está incorreta');
      this.tentativas--
      if (this.tentativas === -1) {
        alert('Você perdeu todas as tentativas')
      }
    }
  }

  atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }
}
