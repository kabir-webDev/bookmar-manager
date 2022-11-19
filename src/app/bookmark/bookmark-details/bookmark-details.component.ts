import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookmark-details',
  templateUrl: './bookmark-details.component.html',
  styleUrls: ['./bookmark-details.component.scss'],
})
export class BookmarkDetailsComponent implements OnInit {
  params: string = '';
  newList: any;
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((paramMap: any) => {
      this.params = paramMap.params.linkId;

      let paramId = 0;
      this.newList = JSON.parse(localStorage['bookmarkList']);
      this.route.paramMap.subscribe((paramMap: any) => {
        paramId = paramMap.params.linkId;
      });
      this.detailsArray = this.newList.filter(function (value: any) {
        return value.id == paramId;
      });
      console.log('some', this.detailsArray);
    });
  }
  detailsArray: any;

  ngOnInit(): void {}
}
