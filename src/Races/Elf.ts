import Race from './Race';

export default class Elf extends Race {
  private _maxLifePonints = 99;
  static _createdRacesInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._createdRacesInstances += 1;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePonints;
  }

  static createdRacesInstances():number {
    return Elf._createdRacesInstances;
  }
}