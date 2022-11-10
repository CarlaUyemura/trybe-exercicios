"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tv = void 0;
class Tv {
    constructor(b, s, r, c) {
        this.brand = b;
        this.size = s;
        this.resolution = r;
        this.connections = c;
    }
    turnOn() {
        console.log(`Tv: ${this.brand}, tamanho: ${this.size}, Resolução: ${this.resolution}, Conexão: ${this.connections}`);
    }
}
exports.Tv = Tv;
