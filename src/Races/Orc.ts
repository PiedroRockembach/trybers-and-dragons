import Race from './Race';

export default class Orc extends Race {
  private _maxLifePonints = 74;
  static _createdRacesInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._createdRacesInstances += 1;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePonints;
  }

  static createdRacesInstances():number {
    return Orc._createdRacesInstances;
  }
}