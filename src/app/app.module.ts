import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CacheService } from './services/cache.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent
  ],
  imports: [    
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    AppRoutingModule
  ],
  providers: [CacheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
