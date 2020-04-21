import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient';
import { INGREDIENTS } from '../INGREDIENTS';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.css']
})
export class IngredientsListComponent implements OnInit {
  ingredients: Ingredient[]; // list to store ingredients

  constructor() { }

  ngOnInit() {
    this.getIngredients();
  }

  /**
   * Return the list of ingredients
   */
  getIngredients() {
    this.ingredients = INGREDIENTS; // TODO: implement service in future use
  }
  
  /**
   * Return an ingredient from the ingredients list
   * @param id the id of the ingredient
   */
  getIngredient(id: number) {
    this.ingredients.find(ingredient => id == ingredient.id) // TODO: implement service in future use
  }
  
  /**
   * Remove an ingredient from the ingredients list
   * @param id the id of the ingredient
   */
  removeIngredient(id: number) {
    this.ingredients.filter( ingredient => id != ingredient.id); // TODO: implement service in future use
  }

}
