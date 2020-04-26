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
   * Add an ingredient to an ingredients list. If the ingredient does not exist yet,
   * then create a new Ingredient and add to the list and ingredients database.
   * @param name the id of the ingredient
   * @param list list of ingredients to add the ingredient to
   */
  addIngredient(name: string, list: Ingredient[]): void {
    if (!this.ingredientExists(name, this.ingredients)) {
      let id = this.gendId();
      let newIngredient: Ingredient = { id:  id, name: name };
      this.ingredients.push(newIngredient);
      list.push(newIngredient);
    } else {
      list.push(this.ingredients.find(i => i.name == name));
    }
  }

  /**
   * Returns true if ingredient already exists, and false otherwise
   * @param name name of an ingredient
   */
  ingredientExists(name: string, list: Ingredient[]): boolean {
    return list.find(i => i.name == name) != undefined;
  }

  /**
   * Search through the ingredients database
   * @param term search term
   * @returns list of ingredients found
   */
  searchIngredients(term: string): Ingredient[] {
    if (!term.trim()) {
      return [];
    }

    return this.ingredients.filter(ingredient => ingredient.name.includes(term.trim()));
  }

}
