import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  
  recipe:Recipe;
  constructor(
  private privateService: DataService,
  private route: ActivatedRoute
    
  ) { }

  ngOnInit() {
    this.getRecipe();
  }

  /**
   * Get recipe according to its id from the local path
   */
  getRecipe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recipe = this.privateService.getRecipe(id)
  } 
}
