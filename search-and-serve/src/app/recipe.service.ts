import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { RECIPES } from './recipes-db';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesDb: Recipe[] = RECIPES;

  constructor() { }

  /**
   * Return a recipe with the given id
   * @param recipeId id of a recipe to obtain
   */
  getRecipe(recipeId: number): Recipe {
    return this.recipesDb[recipeId];
  }

  /**
   * Return the average rating and number of ratings for a recipe
   * @param recipeId the id of a recipe to get the rating of
   */
  getRating(recipeId: number): { avgRating: number, numberOfRatings: number} {
    return this.getRecipe(recipeId).rating;
  }

  /**
   * Update the rating of a recipe
   * @param rating new rating
   * @param recipeId id of recipe to be updated
   */
  updateRating(rating: number, recipeId: number): void {
    let numberOfRatings = this.getRating(recipeId).numberOfRatings;
    this.getRecipe(recipeId).rating = { avgRating: rating, numberOfRatings: numberOfRatings++ };
  }

  
}
