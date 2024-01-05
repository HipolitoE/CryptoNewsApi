import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiasComponent } from './noticias/noticias.component';

const routes: Routes = [
  { path: '', component: NoticiasComponent }, // Ruta de la página de inicio
  // Ruta de detalles de noticia
  // Agrega más rutas según sea necesario para otras páginas
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
