import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VgAPI } from 'videogular2/core';

@Component({
  selector: 'page-single-media-player',
  templateUrl: 'single-media-player.html'
})
export class SingleMediaPlayerPage {
    
    structure: any = {lower: 0, upper: 100};
    api: VgAPI;
    currentTime: number;
    displayCurrentTime: number;
    seekLower: number;
    seekUpper: number;


  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      ) {}

    ionViewDidEnter() {
        this.getLoadedMedia();
        this.getCurrentTime();
    }

    onPlayerReady(api: VgAPI) {
        this.api = api;
    }

    getLoadedMedia() {
        this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(() => {});
    }

    getCurrentTime() {
         this.api.getDefaultMedia().subscriptions.timeUpdate.subscribe(() => {
           this.currentTime = this.api.getDefaultMedia().time.current || 0;
        });
    }

    trim() {
        this.trimTo();
        this.trimFrom();
    }

    trimTo() {
        this.seekLower = this.structure.lower;
        this.api.seekTime(this.seekLower);
        console.log(this.api.getDefaultMedia().currentTime);
        console.log("trimto", this.seekLower);
    }

    trimFrom() {
       this.seekUpper = this.structure.upper;
       this.api.seekTime(this.seekUpper);
       console.log(this.api.getDefaultMedia().currentTime);
       console.log("trimFrom", this.seekUpper);
    }
}