import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})

export class RecipeSearchComponent implements OnInit {
  @Input() recipe:Recipe ={
    name:'filler',
    description:"also filler",
    diet:'vegetarian',
    rating:0,
    timeToPrepare:0,
    type: 'baked'

  };

  
  constructor() { }

  ngOnInit(): void {
  }

}
