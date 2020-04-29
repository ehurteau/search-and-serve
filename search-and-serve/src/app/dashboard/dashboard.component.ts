import { Component, OnInit } from '@angular/core';
import { RECIPES } from '../recipes-db'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  recipes = RECIPES;

  constructor() { }

  ngOnInit() {
  }

}
