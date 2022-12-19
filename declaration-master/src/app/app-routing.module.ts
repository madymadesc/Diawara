import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ContactComponent } from './contact/contact.component';
import { DetailcategorieComponent } from './detailcategorie/detailcategorie.component';
import { PanierComponent } from './panier/panier.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent},
  { path: 'categorie', component: CategorieComponent},
  { path: 'apropos', component: AproposComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'panier', component: PanierComponent},
  { path: 'detailcat', component: DetailcategorieComponent},
  { path: 'profile', component: ProfileComponent},
  
  { path: '**', redirectTo: '/accueil', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
