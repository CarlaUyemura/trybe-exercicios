const calculateAge = (birthDate: Date) => {
  const timeDiff = Math.abs(new Date().getTime() - birthDate.getTime());
  const year = 31_536_000_000;
  return Math.floor(timeDiff / year);
};

export default class Person {
  constructor(public _name: string, private _birthDate: Date) {}

  public get name(): string { return this._name; }

  public set name(value: string) { 
    if (this._name.length < 3) {
      throw new Error('O nome deve ter no mínimo três caracteres');
    }
    this._name = value; 
  }

  public get birthDate(): Date { return this._birthDate; }

  public set birthDate(value: Date) {
    const age = calculateAge(this._birthDate);
    
    if (age < 0) {
      throw new Error('A data de nascimento não pode ser uma data no futuro');
    }
    if (age > 120) {
      throw new Error('A pessoa não pode possuir mais de 120 anos');
    }
    this._birthDate = value; 
  }
}
