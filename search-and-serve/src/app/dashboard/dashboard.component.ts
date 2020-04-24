import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes-db'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  recipes=Recipes;
}
