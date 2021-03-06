import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://live.staticflickr.com/4891/45165261135_69cb589907_b.jpg'),
    new Recipe(
      'A Test Recipe1',
      'This is simply a test1',
      'https://live.staticflickr.com/4891/45165261135_69cb589907_b.jpg')
  ];

  constructor() {  }

  ngOnInit() {
  }

  onClick() {
    console.log('jbg');
  }

}
