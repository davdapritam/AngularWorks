import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddimageComponent } from './addimage/addimage.component';

const routes: Routes = [
  {path:'addimage', component:AddimageComponent},
  {path:'addimage/:id', component:AddimageComponent},
  {path:'', redirectTo:'addimage', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
