import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from "./client-list/client-list.component";
import { ClientFormComponent } from "./client-form/client-form.component";
import { ClientEditFormComponent } from "./client-edit-form/client-edit-form.component";



const routes: Routes = [
  { path: 'clients', component: ClientListComponent},
  { path: 'addClient', component:ClientFormComponent  },
  { path: 'editClient', component:ClientEditFormComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
