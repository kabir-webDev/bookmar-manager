import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarkRoutingModule } from './bookmark-routing.module';
import { BookmarkComponent } from './bookmark.component';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
import { BookmarkDetailsComponent } from './bookmark-details/bookmark-details.component';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BookmarkFormComponent } from './bookmark-form/bookmark-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';


@NgModule({
  declarations: [
    BookmarkComponent,
    BookmarkListComponent,
    BookmarkDetailsComponent,
    BookmarkFormComponent
  ],
  imports: [
    CommonModule,
    BookmarkRoutingModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatRippleModule
  ]
})
export class BookmarkModule { }
