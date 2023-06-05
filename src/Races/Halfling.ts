import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePonints = 60;
  static _createdRacesInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._createdRacesInstances += 1;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePonints;
  }

  static createdRacesInstances():number {
    return Halfling._createdRacesInstances;
  }
}