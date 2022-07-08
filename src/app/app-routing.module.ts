import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculComponent } from './composants/calcul/calcul.component';
import { DetailsProduitComponent } from './composants/details-produit/details-produit.component';
import { FormulaireComponent } from './composants/formulaire/formulaire.component';
import { HomeComponent } from './composants/home/home.component';
import { NotFoundComponent } from './composants/not-found/not-found.component';
import { ProduitComponent } from './composants/produit/produit.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { TableauComponent } from './composants/tableau/tableau.component';
import { AdresseComponent } from './compsants/adresse/adresse.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tableau/:index', component: TableauComponent },
  { path: 'adresse', component: AdresseComponent },
  { path: 'calcul', component: CalculComponent },
  { path: 'produit', component: ProduitComponent },
  { path: 'produit/:id', component: DetailsProduitComponent },
  { path: 'stagiaire', component: StagiaireComponent },
  { path: 'stagiaire/:nom/:prenom', component: StagiaireComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'error', component: NotFoundComponent },
  { path: '**', redirectTo: 'error' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
