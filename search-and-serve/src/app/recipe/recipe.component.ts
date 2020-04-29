import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.getRecipe();
  }

  /**
   * Get recipe according to its id from the local path
   */
  getRecipe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recipe = this.recipeService.getRecipe(id)
  }

  /**
   * Update the recipe's rating
   * and finding it
   * @param rating The new rating being applied
   */
  updateRating(rating: number): void {
    let currRating = this.recipeService.getRating(this.recipe.id);
    let total = currRating.avgRating * currRating.numberOfRatings + rating;
    rating = total / ++currRating.numberOfRatings;
    
    this.recipeService.updateRating(rating, this.recipe.id);
  }

}
