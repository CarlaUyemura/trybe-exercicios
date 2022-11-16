/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
export default abstract class Character {
  constructor(public name: string) {}
  abstract talk():void;
  abstract specialMove():void;
}

export class MeleeCharacter extends Character {
  talk() {
    console.log(`${this.name} Melee speaking`);
  }

  specialMove() {
    console.log(`${this.name} Melee special move`);
  }
}

export class RangedCharacter extends Character {
  talk() {
    console.log(`${this.name} Ranged speaking`);
  }

  specialMove() {
    console.log(`${this.name} Ranged special move`);
  }
}

export const funcCharacter = (character: Character) => {
  character.talk();
  character.specialMove();
};
