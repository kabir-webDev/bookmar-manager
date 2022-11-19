import { Component, OnInit } from '@angular/core';
import { bookmarktList, categoryType } from './bookmark/bookmark.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'bookmark-manager';
  constructor(){}
  bookmarkList:bookmarktList[]=[];
  categoryList:categoryType[]=[]

  ngOnInit(): void {
    
      this.bookmarkList = [
      {id: 1 , title: 'JS Tutorials', url: 'https://www.w3schools.com/javascript', category: {id:10, category:'Category A'} },
      {id: 2, title: 'Angular Basics', url: 'https://www.w3schools.com/angular', category: {id:10, category:'Category B'} },
      {id: 3, title: 'React Introduction', url: 'https://www.w3schools.com/react', category: {id:10, category:'Category C'} },
      {id:4 , title: 'Best Food In Dhaka to eat', url: 'https://www.w3schools.com/food', category: {id:10, category:'Category D'} },
      {id: 5, title: 'Angular Basics', url: 'https://www.w3schools.com/', category: {id:10, category:'Category C'} },
      {id: 6, title: 'Best Pizza', url: 'https://www.w3schools.com/pizza', category: {id:10, category:'Category D'} },
      {id: 7, title: 'Angular Basics', url: 'https://www.w3schools.com/', category: {id:10, category:'Category A'} },
    ];
    this.categoryList = [
      {id:1, category: 'Category A'},
      {id:2, category: 'Category B'},
      {id:3, category: 'Category C'}
    ]
    localStorage.setItem('bookmarkList', JSON.stringify(this.bookmarkList));
    localStorage.setItem('categoryList', JSON.stringify(this.categoryList));
  }
}
