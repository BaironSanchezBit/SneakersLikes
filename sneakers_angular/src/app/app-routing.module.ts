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
import { ListarComentsComponent } from './components/listar-coments/listar-coments.component';
import { PostDefaultComponent } from './components/post-default/post-default.component';

const routes: Routes = [
  {path: '', component: HomeComponent},

  {path: 'nosotros', component: NosotrosComponent},

  {path: 'diccionario', component: DictionaryComponent},

  {path: 'contacto', component: ContactComponent},
  {path: 'crear-comentario', component: ContactComponent},

  {path: 'comentarios', component: ListarComentsComponent},
  {path: 'borrar-comentario/:id', component: ListarComentsComponent},
  {path: 'actualizar-comentario/:id' , component: ListarComentsComponent},
  {path: 'comentarios/:id', component: ListarComentsComponent},

  {path: 'publicaciones', component: PostComponent},
  {path: 'publicacionDe', component: PostDefaultComponent},
  {path: 'ver-publicaciones/:id', component: PostComponent},

  {path: 'nueva-publicacion', component: NewpostComponent},
  {path: 'borrar-publicacion/:id', component: NewpostComponent},

  {path: 'crear-publicacion', component: FormularioPostComponent},
  {path: 'actualizar-publicacion/:id', component: FormularioPostComponent},
  
  {path: 'registro', component: RegisterComponent},
  
  {path: 'ingreso', component: LoginComponent},

  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
