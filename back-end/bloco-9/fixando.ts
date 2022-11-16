export default class Tv {
  brand: string;
  size: number;
  resolution: number;
  connections: string[];
  connectedTo?: string;

  constructor(b: string, s:number, r:number, c:string[]) {
    this.brand = b;
    this.size = s;
    this.resolution = r;
    this.connections = c;
  }

  turnOn():void {
    console.log(`Tv: ${this.brand}, 
    tamanho: ${this.size}, 
    Resolução: ${this.resolution}, Conexão: ${this.connections}`);
  }
}
