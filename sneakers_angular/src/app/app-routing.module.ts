import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { DictionaryComponent } from './components/dictionary/dictionary.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { PostComponent } from './components/post/post.component';
import { NewpostComponent } from './components/newpost/newpost.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FormularioPostComponent } from './components/formulario-post/formulario-post.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'diccionario', component: DictionaryComponent},
  {path: 'contacto', component: ContactComponent},
  {path: 'publicaciones', component: PostComponent},
  {path: 'nueva-publicacion', component: NewpostComponent},
  {path: 'inicio', component: HomeComponent},
  {path: 'crear-publicacion', component: FormularioPostComponent},
  {path: 'actualizar-publicacion/:id', component: FormularioPostComponent},
  {path: 'borrar-publicacion/:id', component: NewpostComponent},
  {path: 'registro', component: RegisterComponent},
  {path: 'ingreso', component: LoginComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
