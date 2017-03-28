import { NgModule }			from '@angular/core';
import { BrowserModule }	from '@angular/platform-browser';
import { HttpModule }		from '@angular/http';
import { AppRoutingModule } from './routing/app-routing.module';

import { AppComponent }		from './components/app.component';
import { PostComponent }	from './components/postsList.component';
import { DetailComponent }	from './components/detail.component';

import { PostService }		from './services/posts.service';
import { DetailService }	from './services/detail.service';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		AppRoutingModule
	],
	declarations: [ 
		AppComponent,
		PostComponent,
		DetailComponent,
	],
	providers:	[ 
		PostService,
		DetailService
	],
	bootstrap:	[ AppComponent ]
})

export class AppModule { }