import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor(life = 85, strength = 63) {
    this._lifePoints = life;
    this._strength = strength;
  }

  get lifePoints():number { return this._lifePoints; }
  get strength():number { return this._strength; }

  public attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);    
  }

  public receiveDamage(attackPoints: number): number {
    this._lifePoints -= attackPoints;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }
}

export default Monster;