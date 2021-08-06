import { Payload } from './Payload';
export class Cargo {
    // properties and methods
    massKg: number;
    material:string;
    constructor(massKg: number, material:string ){
        this.massKg = massKg;
        this.material = material;
    }
 }