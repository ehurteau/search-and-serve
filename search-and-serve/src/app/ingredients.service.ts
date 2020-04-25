import { Injectable, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';
import { INGREDIENTS } from './INGREDIENTS';
import { Ingredient } from './ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  ingredients: Ingredient[] = [];
  id: number = 0; // starting id for ingredients list

  constructor() { }

  gendId(): number {
    return this.ingredients.length > 0 ? Math.max(...this.ingredients.map(ingredient => ingredient.id)) + 1 : 0;
  }

  /**
   * Return the list of ingredients
   */
  getIngredients(): Ingredient[] {
    if (!this.ingredients.length) { this.ingredients = INGREDIENTS; }
    return this.ingredients
  }

  /**
   * Return an ingredient from the ingredients list
   * @param id the id of the ingredient
   */
  getIngredient(id: number): Ingredient {
    return this.ingredients.find(ingredient => id == ingredient.id) 
  }
  
  /**
   * Remove an ingredient from a user's ingredients list
   * @param id the id of the ingredient
   * @param list the user's ingredient list
   */
  removeIngredient(id: number, list: Ingredient[]): Ingredient[] {
    return list = list.filter(ingredient => id != ingredient.id);
  }

  /**
   * Add an ingredient to the ingredients list
   * @param name the id of the ingredient
   */
  addIngredient(name: string): void {
    let id = this.gendId();
    let newIngredient: Ingredient = { id:  id, name: name };
    this.ingredients.push(newIngredient);
  }

}
