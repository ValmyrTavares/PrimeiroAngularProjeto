import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


import { Photo } from './../Photo/photo';
import { Subject } from 'rxjs';
import { PhotoService } from './../Photo/PhotoService';




@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = " ";
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = ""

  constructor(private activatedRoute: ActivatedRoute,
    private photoService: PhotoService) { }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data.photos;

  }

  load() {
    this.photoService.listFromUserPaginated(this.userName, ++this.currentPage).subscribe(photos => {
      this.filter = "";
      this.photos = this.photos.concat(photos);
      if (!photos.length) this.hasMore = false;
    })
  }
}
