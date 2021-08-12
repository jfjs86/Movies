import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowPairsComponent } from './slideshow-pairs/slideshow-pairs.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  entryComponents : [
    DetailsComponent
  ],
  declarations: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowPairsComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    IonicModule, 
    PipesModule
  ],
  exports: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowPairsComponent,
    DetailsComponent
  ]
})
export class ComponentsModule { }
