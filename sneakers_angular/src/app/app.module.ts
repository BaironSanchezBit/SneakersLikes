import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { DictionaryComponent } from './components/dictionary/dictionary.component';
import { PostComponent } from './components/post/post.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
=======
import { NewpostComponent } from './components/newpost/newpost.component';
>>>>>>> b0b719e2c8b8c7be6b1279d907c4780c47e8375d

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NosotrosComponent,
    DictionaryComponent,
    PostComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    NewpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
