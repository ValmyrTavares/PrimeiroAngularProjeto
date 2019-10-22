import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DarkenOnHoverModule } from './../../shared/directives/darken-on-hover/darken-on-hover.module';
import { FilterByDescription } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotoListComponent } from './photo-list.component';
import { PhotoModule } from './../Photo/photo.module';
import { CardModule } from './../../shared/component/card/card/card.module';
import { SearchComponent } from './search/search.component';


@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescription,
        SearchComponent
    ],
    imports: [
        CommonModule,
        PhotoModule,
        CardModule,
        DarkenOnHoverModule
    ]
})

export class PhotoListModule {

}
