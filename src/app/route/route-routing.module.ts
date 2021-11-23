import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PatientsComponent} from "../patients/patients.component";
import {CreatePatientsComponent} from "../create-patients/create-patients.component";
import {UpdatePatientsComponent} from "../update-patients/update-patients.component";

const routes: Routes = [
  {path: 'patients', component: PatientsComponent},
  {path: 'patients/create', component: CreatePatientsComponent},
  {path: 'patients/:pid', component: UpdatePatientsComponent},
  {path: '', redirectTo: 'patients', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule {
}
