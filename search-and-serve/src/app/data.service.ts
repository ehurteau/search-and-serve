import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import {Recipes} from './recipes-db';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: Recipe={
    name: "",
    description: "",
    diet: 'halal',
    id: null,
    image: "",
    rating: null,
    timeToPrepare: null,
    type:'baked'
  }
  constructor() { }

  getRecipe(id:number):Recipe{
    return Recipes[id];
  }
}
