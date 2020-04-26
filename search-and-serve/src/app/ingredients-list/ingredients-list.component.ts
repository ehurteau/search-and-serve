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

  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit() {
    this.getIngredients();
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
