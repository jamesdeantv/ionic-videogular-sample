import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { SingleMediaPlayerPage } from '../pages/single-media-player/single-media-player';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
	
	rootPage : any;

	constructor(platform: Platform) {
		this.rootPage = SingleMediaPlayerPage;
		
		platform.ready().then(() => {
		  StatusBar.styleDefault();
		  Splashscreen.hide();
		});
	}
}
