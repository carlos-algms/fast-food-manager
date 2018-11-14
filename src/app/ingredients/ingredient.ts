export interface IngredientBase {
  id: number;
  name: string;
  value: number;
  amount: number;
  total?: number;
}

export class Ingredient implements IngredientBase {
  constructor(public id: number, public name: string, public value: number, public amount = 0) {}

  get total() {
    return this.amount * this.value;
  }
}
