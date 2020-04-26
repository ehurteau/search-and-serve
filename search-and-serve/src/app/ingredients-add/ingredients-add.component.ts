import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../ingredient';
import { IngredientsService } from '../ingredients.service';

@Component({
  selector: 'app-ingredients-add',
  templateUrl: './ingredients-add.component.html',
  styleUrls: ['./ingredients-add.component.css']
})
export class IngredientsAddComponent implements OnInit {
  @Input() ingredients: Ingredient[] = [];
  @Output() addEvent = new EventEmitter<string>(); // for sending the ingredient name to the parent component

  ingredientsFound: Ingredient[] = []; // search results for ingredients search
  selectedIngredient: string;

  // errors shown when attempting to add an ingredient that already exists
  selectionError: boolean = false;
  termError: boolean = false;

  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit() {
  }

  /**
   * Search through the ingredients database
   * @param term search term
   */
  search(term: string): void {
    this.ingredientsFound = this.ingredientsService.searchIngredients(term.toLowerCase());
    this.selectionError = false;
    this.termError = false;
    this.selectedIngredient = '';
  }

  /**
   * Emit the add event, returning a string that represents the name of an ingredient
   * @param name name of an ingredient
   */
  getIngredientName(name: string) {
    this.addEvent.emit(name);
  }

  /**
   * Emit the add event and hide the add modal
   * @param name name of an ingredient
   */
  addIngredient(name: string): void {
    if (!this.ingredientsFound.length || !this.selectedIngredient.length) {
      if (this.ingredientExists(name)) {
        this.selectionError = false;
        this.termError = true;
        return
      }
      else { 
        this.getIngredientName(name); 
      } 
    }
    else {
      this.getIngredientName(this.selectedIngredient);
    }
    this.selectedIngredient = '';
    this.termError = false;
    this.selectionError = false;
    (<any>$('#addModal')).modal('hide');
  }

  /**
   * Update the selectedIngredient.
   * termError is also set to false, and selectionError is set to false if item is deselected.
   * @param ingredient name of an ingredient
   */
  onSelect(ingredient: string): void {
    this.termError = false;

    if (ingredient == this.selectedIngredient) {
      this.selectedIngredient = ''; // deselect this ingredient
      this.selectionError = false;
      return
    }

    this.selectedIngredient = ingredient;
    if (this.ingredientExists(this.selectedIngredient)) {
      this.selectedIngredient = '';
      this.selectionError = true;
    } else { this.selectionError = false }
    console.log(this.selectedIngredient);
  }

  /**
   * Returns true if ingredient already exists, and false otherwise
   * @param name name of an ingredient
   */
  ingredientExists(name: string): boolean {
    return this.ingredientsService.ingredientExists(name, this.ingredients);
  }

}
