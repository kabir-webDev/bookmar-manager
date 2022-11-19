import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { BookmarkFormComponent } from './bookmark-form/bookmark-form.component';
import { bookmarktList } from './bookmark.model';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {
params:string='';

bookmarkList: bookmarktList[] = [];
newList:any;
  constructor(
    private dialogRef : MatDialog,
    private route: ActivatedRoute){
      this.route.paramMap.subscribe( (paramMap:any) => {
        this.params = paramMap.params.linkId;
        // console.log(this.params);
    })
    }
  ngOnInit(): void {
    this.newList = JSON.parse(localStorage['bookmarkList']);
    
  }

  openDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '35vw';
    dialogConfig.minHeight = '50vh'
    this.dialogRef.open(BookmarkFormComponent,dialogConfig);
  }

}
