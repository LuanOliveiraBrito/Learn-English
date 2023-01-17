import { Component } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { frases } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent {

  public frases : Frase[] = frases
  public instrucao : string = 'Traduza a frase:'
  public resposta : string = ''
  public rodada : number = 0
  public rodadaFrase : Frase
  public progresso : number = 0

  constructor () {
    this.rodadaFrase = this.frases[this.rodada]
    console.log(this.rodadaFrase)
  }

  atualizaResposta(resposta : Event) : void {
    this.resposta = (resposta.target as any).value
    console.log(this.resposta)
  }
  
  verificarResposta() : void {

    if ((this.resposta as string).toLowerCase() == this.rodadaFrase.frasePtBr) {
      alert('A tradução está correta')
      this.rodada++
      this.progresso = this.progresso + (100 / this.frases.length)
      this.rodadaFrase = this.frases[this.rodada]
      console.log(this.progresso)
      this.resposta = ''
    } else {
      alert('A tradução está incorreta')
    }
  }

  atualizaRodada() : void {

  }

}
