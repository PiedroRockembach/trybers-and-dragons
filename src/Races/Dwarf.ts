import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePonints = 80;
  static _createdRacesInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._createdRacesInstances += 1;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePonints;
  }

  static createdRacesInstances():number {
    return Dwarf._createdRacesInstances;
  }
}