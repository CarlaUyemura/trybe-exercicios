/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
export class Superclass {
  isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  public sayHello(): void {
    console.log('Olá, mundo!');
  }
}

export class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }
}

export const myFunc = (obj: Superclass) => {
  obj.sayHello();
  console.log(obj.isSuper ? 'Super!' : 'Sub!');
};
// ========================================================
interface MyInterface {
  myNumber: number,
  myfunc(myParam: number): string; 
}

export class MyClass implements MyInterface {
  constructor(public myNumber: number) {}

  myfunc(myParam: number): string {
    const sum = myParam + this.myNumber;
    return `Soma ${sum}`;
  }
}