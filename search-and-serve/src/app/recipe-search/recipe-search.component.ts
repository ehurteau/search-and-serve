import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../data.service';
import{Location} from '@angular/common';
@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})

export class RecipeSearchComponent implements OnInit {
  @Input() recipe:Recipe ;
  
  descriptionToSize:string="";
  nameToSize:string="";

  constructor(  ) { }

  ngOnInit(): void {
    //makes sure the showed strings fit in our card.
    this.descriptionToSize=this.recipe.description;
    this.nameToSize=this.recipe.name;
    if(this.recipe.description.length > 80){
      this.descriptionToSize=this.recipe.description.slice(0,60) + "...";
    }
    if(this.recipe.name.length>50){
      this.nameToSize=this.recipe.name.slice(0,47)+"..."
    }
   
  }
}
