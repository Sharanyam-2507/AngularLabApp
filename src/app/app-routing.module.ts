import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LighteningComponent } from './lightening/lightening.component';
import { LoginComponent } from './login/login.component';
import { Twitter1Component } from './twitter1/twitter1.component';



const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"lightening", component:LighteningComponent},
  {path:"twitter1", component:Twitter1Component}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
