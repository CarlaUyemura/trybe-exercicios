class Estudante {
  private _matricula: number;
  private _nome: string;
  private _notasProvas: number[] = [];
  private _notasTrabalhos: number[] = [];

  constructor(
    matricula: number, 
    nome: string, 
    notasProvas: number[], 
    notasTrabalhos: number[],
  ) {
    this._matricula = matricula;
    this._nome = nome;
    this._notasProvas = notasProvas;
    this._notasTrabalhos = notasTrabalhos;
  }

  get matricula(): number {
    return this._matricula;
  }

  set matricula(matricula: number) {
    this._matricula = matricula;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(nome: string) {
    this._nome = nome;
  }

  get notasProva(): number[] {
    return this._notasProvas;
  }

  set notasProvas(notasProvas: number[]) {
    if (notasProvas.length !== 4) {
      throw new Error('Quantidade de notas diferente de 4!');
    }
    this._notasProvas = notasProvas;
  }

  get notasTrabalho(): number[] {
    return this._notasTrabalhos;
  }
  
  set notasTrabalhos(notasTrabalhos: number[]) {
    if (notasTrabalhos.length !== 2) {
      throw new Error('Quantidade de notas diferente de 2!');
    }
    this._notasTrabalhos = notasTrabalhos;
  }

  calculaTotalDasNotas() {
    const notas = [...this._notasTrabalhos, ...this._notasProvas];
    return notas.reduce((acc: number, curr: number) => {
      const total = curr + acc;
      return total;
    }, 0);
  }
  
  calculaMediaDasNotas() {
    const notas = this.calculaTotalDasNotas();
    const divisorNotas = this._notasProvas.length + this._notasTrabalhos.length;

    return (notas / divisorNotas).toFixed(2);
  }
}

export default Estudante;
