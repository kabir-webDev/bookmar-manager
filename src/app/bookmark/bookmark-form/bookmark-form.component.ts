import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { categoryType } from '../bookmark.model';

@Component({
  selector: 'app-bookmark-form',
  templateUrl: './bookmark-form.component.html',
  styleUrls: ['./bookmark-form.component.scss'],
})
export class BookmarkFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  catagoryList: categoryType[] = [];
  
  showAddCategoryInput:boolean=false;
  attachBookmark = this.fb.group({
    id:'',
    title: ['', [Validators.required, Validators.maxLength(30)]],
    url: [
      '',
      [
        Validators.required,
        Validators.pattern(
          '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
        ),
      ],
    ],
    category: ['', [Validators.required]],
  });
  newCategory:string='';

  ngOnInit(): void {
    this.catagoryList = JSON.parse(localStorage['categoryList']);
    console.log('this.catagoryList',this.catagoryList);
    
  }

  changeCategory(e: any) {
    this.attachBookmark.controls['category']?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  openAddCategoryInput(){
    this.showAddCategoryInput = !this.showAddCategoryInput;
    console.log('thi',this.newCategory);
    
  }

  addCategory(){
    let newCategory = [...this.catagoryList,{id:this.catagoryList.length+1, category: this.newCategory}]
    console.log('newCategory',newCategory);
    
    localStorage.setItem('categoryList', JSON.stringify(newCategory));
    this.catagoryList = JSON.parse(localStorage['categoryList']);
    this.showAddCategoryInput = !this.showAddCategoryInput;
  }
  attachBookmarkFormData() {
    this.attachBookmark.value.id=JSON.parse(localStorage['bookmarkList']).length+1;
    let newBookmarkList = [...JSON.parse(localStorage['bookmarkList']),this.attachBookmark.value];
    localStorage.setItem('bookmarkList', JSON.stringify(newBookmarkList));
    
  }
}
