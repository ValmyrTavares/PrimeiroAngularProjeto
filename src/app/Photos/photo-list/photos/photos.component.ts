// import { Component, OnInit, Input, OnChanges, SimpleChanges } from'@angular/router';
import { Photo } from '../../Photo/photo';
import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})

export class PhotosComponent implements OnChanges {

  @Input() photos: Photo[] = [];
  rows: any[];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.photos) {
      this.rows = this.groupColums(this.photos)
    }
  }

  groupColums(photos: Photo[]) {
    const newRows = []

    for (let index = 0; index < this.photos.length; index += 3) {
      newRows.push(photos.slice(index, index + 3));
    }
    return newRows
  }
}








// ngOnInit() {
    //   this.rows = this.groupColumns(this.photos)
    // }
    // groupColumns(photos: Photo[]) {
    //   const newRows = [];

    //   for (let index = 0; index < photos.length; index += 3) {
    //     newRows.push(photos.slice(index, index + 3));
    //   }
    //   return newRows;
    // }
    //}