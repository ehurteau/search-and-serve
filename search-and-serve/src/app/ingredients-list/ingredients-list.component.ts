import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient';
import { IngredientsService } from '../ingredients.service';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.css']
})
export class IngredientsListComponent implements OnInit {
  ingredientsDB: Ingredient[] = []; // list to store ingredients
  userIngredients: Ingredient[] = []; // a user's list of ingredients

  ingredientsFound: Ingredient[] = []; // search results

  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit() {
    this.getIngredients();
  }

  /**
   * Searches through the user's ingredients list
   * @param term name of the ingredient to search for
   */
  search(term: string): void {
    this.ingredientsFound = this.ingredientsService.searchIngredients(term.toLowerCase(), this.userIngredients);
  }

  /**
   * Return the list of ingredients
   */
  getIngredients(): Ingredient[] {
    return this.ingredientsDB = this.ingredientsService.getIngredients();
  }
  
  /**
   * Return an ingredient from the ingredients list
   * @param id the id of the ingredient
   */
  getIngredient(id: number): Ingredient {
    return this.ingredientsService.getIngredient(id);
  }
  
  /**
   * Remove an ingredient from the ingredients list
   * @param id the id of the ingredient
   */
  removeIngredient(id: number): void {
    this.userIngredients = this.ingredientsService.removeIngredient(id, this.userIngredients);
  }

  /**
   * Add an ingredient to the ingredients list
   * @param name the id of the ingredient
   */
  addIngredient(name: string): void {
    this.ingredientsService.addIngredient(name, this.userIngredients);
  }

}
