import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { LoginComponent } from '../views/login/login.component';
// aqui ficam as rotas, se eu digitar nada "" vai pra home
const routes: Routes = [
{ path: "", component: HomeComponent }
{ path: "src/app/views/login/login.component.html", component: LoginComponent}
]
@NgModule({
// vai redirecionar as rotas
imports: [RouterModule.forRoot(routes)],
// vai exportas as rotas
exports: [RouterModule]
})
export class AppRoutingModule { }