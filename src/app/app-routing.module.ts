import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OuvrageListComponent } from './ouvrage-list/ouvrage-list.component';
import { OuvrageDetailComponent } from './ouvrage-detail/ouvrage-detail.component';
import { OuvrageConsultationComponent } from './ouvrage-consultation/ouvrage-consultation.component';
import { EditeurListComponent } from './editeur-list/editeur-list.component';

const routes: Routes = [
  {path: 'homebook/allbooks', component: OuvrageListComponent},
  {path: 'homebook/createbook', component: OuvrageDetailComponent},
  {path: 'homebook/modifybook/:idOuvrage', component: OuvrageDetailComponent},
  {path: 'homebook/onebook/:idOuvrage', component: OuvrageConsultationComponent},
  {path: 'homebook/delete/:idOuvrage', component: OuvrageListComponent},
  {path: 'gestionnaire', component: EditeurListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
