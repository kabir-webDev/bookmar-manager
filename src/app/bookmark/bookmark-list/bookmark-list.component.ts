import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { bookmarktList } from '../bookmark.model';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.scss'],
})
export class BookmarkListComponent implements OnInit {
  @Input()category: string = '';
  params:string='';
  @Input() bookmarkList:bookmarktList[]=[];
  constructor(
  ) {}

  ngOnInit(): void {
  }
}
