import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { RECIPES } from './recipes-db';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: Recipe = {
    title: "",
    description: "",
    diet: 'halal',
    id: null,
    imageURL: "",
    rating: null,
    timeToPrepare: null,
    type:'baked',
    ingredients: null,
    instructions: "",
    author: "",
  }
  constructor() { }

  getRecipe(id: number): Recipe{
    return RECIPES[id];
  }
}
