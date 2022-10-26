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
import { ReactiveFormsModule } from '@angular/forms';
import { NewpostComponent } from './components/newpost/newpost.component';
import { HttpClientModule } from "@angular/common/http";
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FormularioPostComponent } from './components/formulario-post/formulario-post.component';
import { ListarComentsComponent } from './components/listar-coments/listar-coments.component';

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
    NewpostComponent,
    RegisterComponent,
    LoginComponent,
    FormularioPostComponent,
    ListarComentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
